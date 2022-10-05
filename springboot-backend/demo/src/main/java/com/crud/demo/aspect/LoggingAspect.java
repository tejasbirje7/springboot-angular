package com.crud.demo.aspect;

import com.crud.demo.entity.Employee;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

    Authentication authentication;

    @Pointcut("execution(* com.crud.demo.service.*.*(..))")
    public void forServicePackage() {}

    @Pointcut("execution(* com.crud.demo.service.*.find*(..))")
    public void allFindMethods() {}

    @Pointcut("execution(* com.crud.demo.service.*.search*(..))")
    public void searchMethod() {}

    @Pointcut("forServicePackage() && !(allFindMethods() || searchMethod())")
    public void forServicePackageNoFindAndSearchMethods() {}


    @Before("forServicePackageNoFindAndSearchMethods()")
    public void operationsOnDatabase() {
        System.out.println("===============> Modifications done on database");
    }

    @Before("execution(* findAllByOrderByLastNameAsc())")
    public void employeeSearched(JoinPoint jointPoint) {
        System.out.println("=====> Employee was searched");
    }

    @After("execution(* com.crud.demo.controller.*.showFormForAdd(..))")
    public void addingEmployee(JoinPoint jointPoint) {

        addToMap(jointPoint,"Employee added ");
    }

    @Before("execution(* com.crud.demo.controller.*.save*(..))")
    public void updatingEmployee(JoinPoint jointPoint) {

        addToMap(jointPoint, "Employee updated ");
    }

    @After("execution(* com.crud.demo.controller.*.delete*(..))")
    public void employeeDeleted(JoinPoint jointPoint) {
        System.out.println("========> Delete");
        addToMap(jointPoint,"Employee deleted ");
    }

    private void addToMap(JoinPoint jointPoint, String log) {
        this.authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        Object[] args = jointPoint.getArgs();
        for(Object tempArg : args) {
            System.out.println("=====> Temp Arg : " + tempArg);
            if (tempArg instanceof Employee) {
                Employee emp = (Employee) tempArg;
                System.out.println("=====> Employee : "+ emp.getFirstName());
            }
        }
    }

}
