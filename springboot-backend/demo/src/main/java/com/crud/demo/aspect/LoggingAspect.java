package com.crud.demo.aspect;

import com.crud.demo.entity.Employee;
import com.crud.demo.service.EmployeeService;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.time.Clock;
import java.time.Instant;
import java.time.ZoneId;
import java.util.HashMap;
import java.util.Map;

@Aspect
@Component
public class LoggingAspect {

    private final EmployeeService employeeService;
    public static Map<Long,String> map = new HashMap<>();

    Clock defaultClock = Clock.systemDefaultZone();
    ZoneId istZone = ZoneId.of("Asia/Kolkata");

    @Autowired
    public LoggingAspect(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    /**
     * Employee is searched / find by some or the other routes in controller
     */
    @Pointcut("execution(* com.crud.demo.service.*.find*(..))")
    public void allFindMethods() {}

    @Pointcut("execution(* com.crud.demo.service.*.search*(..))")
    public void searchMethod() {}

    @Pointcut("allFindMethods() || searchMethod()")
    public void forServicePackageNoFindAndSearchMethods() {}

    @Before("forServicePackageNoFindAndSearchMethods()")
    public void operationsOnDatabase() {
        String line = "AOP => Employee searched in database";
        /*
        map.put(Instant.now(defaultClock)
                .atZone(istZone)
                .toInstant().toEpochMilli(),line);*/
    }

    /**
     * New employee is saved in database
     * @param jointPoint
     */
    @After("execution(* com.crud.demo.controller.EmployeeController.save*(..))")
    public void addingEmployee(JoinPoint jointPoint) {
        addToMap(jointPoint,"AOP => Added employee in database");
    }

    /**
     * New employee is updated in database
     * @param jointPoint
     */
    @Before("execution(* com.crud.demo.controller.EmployeeController.update*(..))")
    public void updatingEmployee(JoinPoint jointPoint) {
        addToMap(jointPoint,"AOP => Updated employee in database");
    }

    /**
     * New employee is deleted in database
     * @param jointPoint
     */
    @Before("execution(* com.crud.demo.controller.EmployeeController.delete*(..))")
    public void deletingEmployee(JoinPoint jointPoint) {
        addToMap(jointPoint,"AOP => Deleted employee in database");
    }

    private void addToMap(JoinPoint jointPoint, String log) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object[] args = jointPoint.getArgs();
        String empName = "";
        for(Object tempArg : args) {
            Employee emp;
            if (tempArg instanceof Integer) {
                emp = employeeService.findById((int)tempArg);
                empName = emp.getFirstName();
            }
            else if (tempArg instanceof Employee) {
                emp = (Employee) tempArg;
                empName =  emp.getFirstName();
            }
        }
        String line = log + " " + empName + " by " + authentication.getName();
        map.put(Instant.now(defaultClock)
                .atZone(istZone)
                .toInstant().toEpochMilli(),line);
    }

    public static Map<Long,String> getAopMAP() {
        return map;
    }

}
