(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/_helpers/auth.guard.ts":
    /*!****************************************!*\
      !*** ./src/app/_helpers/auth.guard.ts ***!
      \****************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcApp_helpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      "./src/app/_services/token-storage.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(token, router) {
          _classCallCheck(this, AuthGuard);

          this.token = token;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var token = this.token.getToken();

            if (token != null) {
              return true;
            } else {
              this.router.navigate(['login']);
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.??fac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_helpers/auth.interceptor.ts":
    /*!**********************************************!*\
      !*** ./src/app/_helpers/auth.interceptor.ts ***!
      \**********************************************/

    /*! exports provided: AuthInterceptor, authInterceptorProviders */

    /***/
    function srcApp_helpersAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function () {
        return authInterceptorProviders;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      "./src/app/_services/token-storage.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(token, router) {
          _classCallCheck(this, AuthInterceptor);

          this.token = token;
          this.router = router;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            console.log("Request Intercepted");
            var authReq = req;
            var token = this.token.getToken();

            if (token != null) {
              // for Spring Boot back-end
              authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
              });
            } else {
              this.router.navigate(['login']);
            }

            return next.handle(authReq);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.??fac = function AuthInterceptor_Factory(t) {
        return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AuthInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: AuthInterceptor,
        factory: AuthInterceptor.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AuthInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();

      var authInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: AuthInterceptor,
        multi: true
      }];
      /***/
    },

    /***/
    "./src/app/_services/auth.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/_services/auth.service.ts ***!
      \*******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcApp_servicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AUTH_API = 'http://localhost:8080/api/auth/';
      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json'
        })
      };

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(username, password) {
            return this.http.post(AUTH_API + 'signin', {
              username: username,
              password: password
            }, httpOptions);
          }
        }, {
          key: "register",
          value: function register(username, email, password) {
            return this.http.post(AUTH_API + 'signup', {
              username: username,
              email: email,
              password: password
            }, httpOptions);
          }
        }]);

        return AuthService;
      }();

      AuthService.??fac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AuthService,
        factory: AuthService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_services/employee.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/_services/employee.service.ts ***!
      \***********************************************/

    /*! exports provided: EmployeeService */

    /***/
    function srcApp_servicesEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
        return EmployeeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var EmployeeService = /*#__PURE__*/function () {
        function EmployeeService(httpClient) {
          _classCallCheck(this, EmployeeService);

          this.httpClient = httpClient;
          this.baseURL = 'http://localhost:8080/api/v1/employees';
        }

        _createClass(EmployeeService, [{
          key: "getEmployeesList",
          value: function getEmployeesList() {
            return this.httpClient.get("".concat(this.baseURL));
          }
        }, {
          key: "createEmployee",
          value: function createEmployee(employee) {
            return this.httpClient.post("".concat(this.baseURL), employee);
          }
        }, {
          key: "getEmployeeById",
          value: function getEmployeeById(id) {
            return this.httpClient.get("".concat(this.baseURL, "/").concat(id));
          }
        }, {
          key: "updateEmployee",
          value: function updateEmployee(id, employee) {
            return this.httpClient.put("".concat(this.baseURL, "/").concat(id), employee);
          }
        }, {
          key: "deleteEmployee",
          value: function deleteEmployee(id) {
            return this.httpClient["delete"]("".concat(this.baseURL, "/").concat(id));
          }
        }]);

        return EmployeeService;
      }();

      EmployeeService.??fac = function EmployeeService_Factory(t) {
        return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      EmployeeService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: EmployeeService,
        factory: EmployeeService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmployeeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_services/employee.ts":
    /*!***************************************!*\
      !*** ./src/app/_services/employee.ts ***!
      \***************************************/

    /*! exports provided: Employee */

    /***/
    function srcApp_servicesEmployeeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Employee", function () {
        return Employee;
      });

      var Employee = function Employee() {
        _classCallCheck(this, Employee);
      };
      /***/

    },

    /***/
    "./src/app/_services/token-storage.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/_services/token-storage.service.ts ***!
      \****************************************************/

    /*! exports provided: TokenStorageService */

    /***/
    function srcApp_servicesTokenStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
        return TokenStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TOKEN_KEY = 'auth-token';
      var USER_KEY = 'auth-user';

      var TokenStorageService = /*#__PURE__*/function () {
        function TokenStorageService() {
          _classCallCheck(this, TokenStorageService);
        }

        _createClass(TokenStorageService, [{
          key: "signOut",
          value: function signOut() {
            window.sessionStorage.clear();
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            window.sessionStorage.removeItem(TOKEN_KEY);
            window.sessionStorage.setItem(TOKEN_KEY, token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return window.sessionStorage.getItem(TOKEN_KEY);
          }
        }, {
          key: "saveUser",
          value: function saveUser(user) {
            window.sessionStorage.removeItem(USER_KEY);
            window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var user = window.sessionStorage.getItem(USER_KEY);

            if (user) {
              return JSON.parse(user);
            }

            return {};
          }
        }]);

        return TokenStorageService;
      }();

      TokenStorageService.??fac = function TokenStorageService_Factory(t) {
        return new (t || TokenStorageService)();
      };

      TokenStorageService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: TokenStorageService,
        factory: TokenStorageService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TokenStorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./employee-list/employee-list.component */
      "./src/app/employee-list/employee-list.component.ts");
      /* harmony import */


      var _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-employee/create-employee.component */
      "./src/app/create-employee/create-employee.component.ts");
      /* harmony import */


      var _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./update-employee/update-employee.component */
      "./src/app/update-employee/update-employee.component.ts");
      /* harmony import */


      var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./employee-details/employee-details.component */
      "./src/app/employee-details/employee-details.component.ts");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register/register.component */
      "./src/app/register/register.component.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login.component.ts");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./profile/profile.component */
      "./src/app/profile/profile.component.ts");
      /* harmony import */


      var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./_helpers/auth.guard */
      "./src/app/_helpers/auth.guard.ts");

      var routes = [{
        path: 'employees',
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"]
      }, {
        path: 'create-employee',
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        component: _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_3__["CreateEmployeeComponent"]
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'update-employee/:id',
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        component: _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_4__["UpdateEmployeeComponent"]
      }, {
        path: 'employee-details/:id',
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDetailsComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
      }, {
        path: 'profile',
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./_services/token-storage.service */
      "./src/app/_services/token-storage.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AppComponent_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AppComponent_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Employee List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Add Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_ul_5_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "LogOut");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.username);
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(tokenStorageService, router) {
          _classCallCheck(this, AppComponent);

          this.tokenStorageService = tokenStorageService;
          this.router = router;
          this.title = 'Angular - Spring Boot - Spring Security with JWT';
          this.roles = [];
          this.isLoggedIn = false;
          this.showAdminBoard = false;
          this.showModeratorBoard = false;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isLoggedIn = !!this.tokenStorageService.getToken();
            console.log("Logged IN : ", this.tokenStorageService.getToken());

            if (this.isLoggedIn) {
              var user = this.tokenStorageService.getUser();
              console.log(user);
              this.roles = user.roles;
              this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
              this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
              this.username = user.username;
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.tokenStorageService.signOut();
            this.isLoggedIn = false;
            this.router.navigate(['login']).then(function (r) {
              return window.location.reload();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 13,
        vars: 3,
        consts: [[1, "navbar", "justify-content-center", "navbar-expand-sm", "bg-info", "navbar-dark"], [1, "text-center", "font-weight-bolder"], [1, "navbar", "navbar-expand", "navbar-dark", "bg-dark"], ["class", "navbar-nav justify-content-center", 4, "ngIf"], ["class", "navbar-nav ml-auto", 4, "ngIf"], [1, "container"], [1, "footer"], [1, "navbar-nav", "justify-content-center"], [1, "nav-item"], ["href", "/register", "routerLink", "register", 1, "nav-link", "font-weight-bolder"], ["href", "/login", "routerLink", "login", 1, "nav-link", "font-weight-bolder"], [1, "navbar-nav", "ml-auto"], ["href", "/profile", "routerLink", "profile", 1, "nav-link"], ["routerLink", "employees", "routerLinkActive", "active", 1, "nav-link", "font-weight-bolder"], ["routerLink", "create-employee", "routerLinkActive", "active", 1, "nav-link", "font-weight-bolder"], ["href", "", 1, "nav-link", 3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, AppComponent_ul_4_Template, 7, 0, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, AppComponent_ul_5_Template, 13, 1, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "footer", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " All Rights Reserved 2022 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoggedIn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./employee-list/employee-list.component */
      "./src/app/employee-list/employee-list.component.ts");
      /* harmony import */


      var _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-employee/create-employee.component */
      "./src/app/create-employee/create-employee.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./update-employee/update-employee.component */
      "./src/app/update-employee/update-employee.component.ts");
      /* harmony import */


      var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./employee-details/employee-details.component */
      "./src/app/employee-details/employee-details.component.ts");
      /* harmony import */


      var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./_helpers/auth.interceptor */
      "./src/app/_helpers/auth.interceptor.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login.component.ts");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./register/register.component */
      "./src/app/register/register.component.ts");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./profile/profile.component */
      "./src/app/profile/profile.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["authInterceptorProviders"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"], _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_6__["CreateEmployeeComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_8__["UpdateEmployeeComponent"], _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeDetailsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"], _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_6__["CreateEmployeeComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_8__["UpdateEmployeeComponent"], _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeDetailsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
            providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["authInterceptorProviders"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/create-employee/create-employee.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/create-employee/create-employee.component.ts ***!
      \**************************************************************/

    /*! exports provided: CreateEmployeeComponent */

    /***/
    function srcAppCreateEmployeeCreateEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateEmployeeComponent", function () {
        return CreateEmployeeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/employee */
      "./src/app/_services/employee.ts");
      /* harmony import */


      var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/employee.service */
      "./src/app/_services/employee.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function CreateEmployeeComponent_p_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " You don't have access to add employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var CreateEmployeeComponent = /*#__PURE__*/function () {
        function CreateEmployeeComponent(employeeService, router) {
          _classCallCheck(this, CreateEmployeeComponent);

          this.employeeService = employeeService;
          this.router = router;
          this.employee = new _services_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]();
          this.noAccess = false;
        }

        _createClass(CreateEmployeeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.noAccess = false;
          }
        }, {
          key: "saveEmployee",
          value: function saveEmployee() {
            var _this = this;

            this.employeeService.createEmployee(this.employee).subscribe(function (data) {
              console.log(data);

              _this.goToEmployeeList();
            }, function (error) {
              console.log(error);

              if (error.status === 403) {
                _this.noAccess = true;
              }
            });
          }
        }, {
          key: "goToEmployeeList",
          value: function goToEmployeeList() {
            this.router.navigate(['/employees']);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.log(this.employee);
            this.saveEmployee();
          }
        }]);

        return CreateEmployeeComponent;
      }();

      CreateEmployeeComponent.??fac = function CreateEmployeeComponent_Factory(t) {
        return new (t || CreateEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      CreateEmployeeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CreateEmployeeComponent,
        selectors: [["app-create-employee"]],
        decls: 22,
        vars: 4,
        consts: [[1, "col-md-12"], [1, "card", "card-container"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "id", "firstName", "name", "firstName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "lastName", "name", "lastName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], [1, "btn", "btn-primary", "btn-block"], [1, "text-danger"]],
        template: function CreateEmployeeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Add Employee ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function CreateEmployeeComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CreateEmployeeComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.employee.firstName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CreateEmployeeComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.employee.lastName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Email Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CreateEmployeeComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.employee.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, CreateEmployeeComponent_p_19_Template, 2, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employee.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employee.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employee.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.noAccess);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card[_ngcontent-%COMP%] {\n  max-width: 400px !important;\n  padding: 40px 40px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWVtcGxveWVlL2NyZWF0ZS1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFHaEIsa0JBQWtCO0VBR2xCLDBDQUEwQztBQUM1QyIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1lbXBsb3llZS9jcmVhdGUtZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0MHB4IDQwcHg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CreateEmployeeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-employee',
            templateUrl: './create-employee.component.html',
            styleUrls: ['./create-employee.component.css']
          }]
        }], function () {
          return [{
            type: _services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/employee-details/employee-details.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/employee-details/employee-details.component.ts ***!
      \****************************************************************/

    /*! exports provided: EmployeeDetailsComponent */

    /***/
    function srcAppEmployeeDetailsEmployeeDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function () {
        return EmployeeDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/employee */
      "./src/app/_services/employee.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/employee.service */
      "./src/app/_services/employee.service.ts");

      var EmployeeDetailsComponent = /*#__PURE__*/function () {
        function EmployeeDetailsComponent(route, employeService) {
          _classCallCheck(this, EmployeeDetailsComponent);

          this.route = route;
          this.employeService = employeService;
        }

        _createClass(EmployeeDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.id = this.route.snapshot.params['id'];
            this.employee = new _services_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]();
            this.employeService.getEmployeeById(this.id).subscribe(function (data) {
              _this2.employee = data;
            });
          }
        }]);

        return EmployeeDetailsComponent;
      }();

      EmployeeDetailsComponent.??fac = function EmployeeDetailsComponent_Factory(t) {
        return new (t || EmployeeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]));
      };

      EmployeeDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EmployeeDetailsComponent,
        selectors: [["app-employee-details"]],
        decls: 19,
        vars: 3,
        template: function EmployeeDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Employee Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " First Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Last Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Email Id: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.employee.firstName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.employee.lastName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.employee.email, " ");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLWRldGFpbHMvZW1wbG95ZWUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmployeeDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-employee-details',
            templateUrl: './employee-details.component.html',
            styleUrls: ['./employee-details.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/employee-list/employee-list.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/employee-list/employee-list.component.ts ***!
      \**********************************************************/

    /*! exports provided: EmployeeListComponent */

    /***/
    function srcAppEmployeeListEmployeeListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function () {
        return EmployeeListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/employee.service */
      "./src/app/_services/employee.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function EmployeeListComponent_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_tr_14_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var employee_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r3.updateEmployee(employee_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_tr_14_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var employee_r2 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r5.deleteEmployee(employee_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_tr_14_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var employee_r2 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r6.employeeDetails(employee_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var employee_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", employee_r2.firstName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", employee_r2.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", employee_r2.email, " ");
        }
      }

      function EmployeeListComponent_p_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " You don't have access to delete employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var EmployeeListComponent = /*#__PURE__*/function () {
        function EmployeeListComponent(employeeService, router) {
          _classCallCheck(this, EmployeeListComponent);

          this.employeeService = employeeService;
          this.router = router;
          this.noAccess = false;
        }

        _createClass(EmployeeListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.noAccess = false;
            this.getEmployees();
          }
        }, {
          key: "getEmployees",
          value: function getEmployees() {
            var _this3 = this;

            this.employeeService.getEmployeesList().subscribe(function (data) {
              _this3.employees = data;
            });
          }
        }, {
          key: "employeeDetails",
          value: function employeeDetails(id) {
            this.router.navigate(['employee-details', id]);
          }
        }, {
          key: "updateEmployee",
          value: function updateEmployee(id) {
            this.router.navigate(['update-employee', id]);
          }
        }, {
          key: "deleteEmployee",
          value: function deleteEmployee(id) {
            var _this4 = this;

            this.employeeService.deleteEmployee(id).subscribe(function (data) {
              console.log(data);

              _this4.getEmployees();
            }, function (error) {
              if (error.status === 403) {
                _this4.noAccess = true;
              }
            });
          }
        }]);

        return EmployeeListComponent;
      }();

      EmployeeListComponent.??fac = function EmployeeListComponent_Factory(t) {
        return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      EmployeeListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EmployeeListComponent,
        selectors: [["app-employee-list"]],
        decls: 17,
        vars: 2,
        consts: [[1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [1, "btn", "btn-info", 3, "click"], [1, "btn", "btn-danger", 2, "margin-left", "10px", 3, "click"], [1, "btn", "btn-info", 2, "margin-left", "10px", 3, "click"], [1, "text-danger"]],
        template: function EmployeeListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Employee List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Last Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Email Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Actions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, EmployeeListComponent_tr_14_Template, 14, 3, "tr", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, EmployeeListComponent_p_16_Template, 2, 0, "p", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.employees);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.noAccess);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmployeeListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-employee-list',
            templateUrl: './employee-list.component.html',
            styleUrls: ['./employee-list.component.css']
          }]
        }], function () {
          return [{
            type: _services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/login/login.component.ts":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/auth.service */
      "./src/app/_services/auth.service.ts");
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      "./src/app/_services/token-storage.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function LoginComponent_form_5_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Username is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LoginComponent_form_5_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LoginComponent_form_5_div_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password must be at least 6 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LoginComponent_form_5_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LoginComponent_form_5_div_13_div_1_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, LoginComponent_form_5_div_13_div_2_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.errors.minlength);
        }
      }

      function LoginComponent_form_5_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Login failed: ", ctx_r7.errorMessage, " ");
        }
      }

      function LoginComponent_form_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_form_5_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return _r2.form.valid && ctx_r10.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_form_5_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r12.form.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, LoginComponent_form_5_div_7_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_form_5_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r13.form.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, LoginComponent_form_5_div_13_Template, 3, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, LoginComponent_form_5_div_19_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.form.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.form.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r2.submitted && ctx_r0.isLoginFailed);
        }
      }

      function LoginComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Logged in as ", ctx_r1.roles, ". ");
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, tokenStorage) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.tokenStorage = tokenStorage;
          this.form = {
            username: null,
            password: null
          };
          this.isLoggedIn = false;
          this.isLoginFailed = false;
          this.errorMessage = '';
          this.roles = [];
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.tokenStorage.getToken()) {
              this.isLoggedIn = true;
              this.roles = this.tokenStorage.getUser().roles;
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this5 = this;

            var _this$form = this.form,
                username = _this$form.username,
                password = _this$form.password;
            this.authService.login(username, password).subscribe(function (data) {
              _this5.tokenStorage.saveToken(data.accessToken);

              _this5.tokenStorage.saveUser(data);

              _this5.isLoginFailed = false;
              _this5.isLoggedIn = true;
              _this5.roles = _this5.tokenStorage.getUser().roles;

              _this5.reloadPage();
            }, function (err) {
              _this5.errorMessage = err.error.message;
              _this5.isLoginFailed = true;
            });
          }
        }, {
          key: "reloadPage",
          value: function reloadPage() {
            window.location.reload();
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 7,
        vars: 2,
        consts: [[1, "col-md-12"], [1, "card", "card-container"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "required", "", "minlength", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary", "btn-block"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"], [1, "alert", "alert-success"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, LoginComponent_form_5_Template, 20, 5, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, LoginComponent_div_6_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoggedIn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]],
        styles: ["label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card[_ngcontent-%COMP%] {\n  max-width: 400px !important;\n  padding: 40px 40px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBR2hCLGtCQUFrQjtFQUdsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBR2Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0MHB4IDQwcHg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnByb2ZpbGUtaW1nLWNhcmQge1xuICB3aWR0aDogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/profile/profile.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/profile/profile.component.ts ***!
      \**********************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      "./src/app/_services/token-storage.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ProfileComponent_div_0_li_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var role_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", role_r4, " ");
        }
      }

      function ProfileComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Profile : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Token:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Roles:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ProfileComponent_div_0_li_18_Template, 2, 1, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.currentUser.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx_r0.currentUser.accessToken.substring(0, 20), " ... ", ctx_r0.currentUser.accessToken.substr(ctx_r0.currentUser.accessToken.length - 20), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.currentUser.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.currentUser.roles);
        }
      }

      function ProfileComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Please login.\n");
        }
      }

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(token) {
          _classCallCheck(this, ProfileComponent);

          this.token = token;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.token.getUser();
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.??fac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]));
      };

      ProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 3,
        vars: 2,
        consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["loggedOut", ""], [1, "container"], [1, "navbar", "navbar-light", "bg-info"], [4, "ngFor", "ngForOf"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ProfileComponent_div_0_Template, 19, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProfileComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
          }]
        }], function () {
          return [{
            type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/register/register.component.ts":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/auth.service */
      "./src/app/_services/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function RegisterComponent_form_5_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Username is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_form_5_div_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Username must be at least 3 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_form_5_div_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Username must be at most 20 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_form_5_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RegisterComponent_form_5_div_7_div_1_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, RegisterComponent_form_5_div_7_div_2_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, RegisterComponent_form_5_div_7_div_3_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.errors.maxlength);
        }
      }

      function RegisterComponent_form_5_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_form_5_div_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email must be a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_form_5_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RegisterComponent_form_5_div_13_div_1_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, RegisterComponent_form_5_div_13_div_2_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.errors.email);
        }
      }

      function RegisterComponent_form_5_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_form_5_div_19_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password must be at least 6 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_form_5_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RegisterComponent_form_5_div_19_div_1_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, RegisterComponent_form_5_div_19_div_2_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r7.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r7.errors.minlength);
        }
      }

      function RegisterComponent_form_5_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Signup failed!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r9.errorMessage, " ");
        }
      }

      function RegisterComponent_form_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function RegisterComponent_form_5_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return _r2.form.valid && ctx_r17.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegisterComponent_form_5_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r19.form.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, RegisterComponent_form_5_div_7_Template, 4, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegisterComponent_form_5_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r20.form.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, RegisterComponent_form_5_div_13_Template, 3, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegisterComponent_form_5_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r21.form.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, RegisterComponent_form_5_div_19_Template, 3, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, RegisterComponent_form_5_div_24_Template, 4, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](18);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.form.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.form.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.form.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r7.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r2.submitted && ctx_r0.isSignUpFailed);
        }
      }

      function RegisterComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Your registration is successful! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(authService) {
          _classCallCheck(this, RegisterComponent);

          this.authService = authService;
          this.form = {
            username: null,
            email: null,
            password: null
          };
          this.isSuccessful = false;
          this.isSignUpFailed = false;
          this.errorMessage = '';
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this6 = this;

            var _this$form2 = this.form,
                username = _this$form2.username,
                email = _this$form2.email,
                password = _this$form2.password;
            this.authService.register(username, email, password).subscribe(function (data) {
              console.log(data);
              _this6.isSuccessful = true;
              _this6.isSignUpFailed = false;
            }, function (err) {
              _this6.errorMessage = err.error.message;
              _this6.isSignUpFailed = true;
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.??fac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 7,
        vars: 2,
        consts: [[1, "col-md-12"], [1, "card", "card-container"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert-danger", 4, "ngIf"], ["for", "email"], ["type", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "required", "", "minlength", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary", "btn-block"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, RegisterComponent_form_5_Template, 25, 7, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, RegisterComponent_div_6_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isSuccessful);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isSuccessful);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"]],
        styles: ["label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card[_ngcontent-%COMP%] {\n  max-width: 400px !important;\n  padding: 40px 40px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBR2hCLGtCQUFrQjtFQUdsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBR2Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0MHB4IDQwcHg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnByb2ZpbGUtaW1nLWNhcmQge1xuICB3aWR0aDogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/update-employee/update-employee.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/update-employee/update-employee.component.ts ***!
      \**************************************************************/

    /*! exports provided: UpdateEmployeeComponent */

    /***/
    function srcAppUpdateEmployeeUpdateEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateEmployeeComponent", function () {
        return UpdateEmployeeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/employee */
      "./src/app/_services/employee.ts");
      /* harmony import */


      var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/employee.service */
      "./src/app/_services/employee.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function UpdateEmployeeComponent_p_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " You don't have access to update employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var UpdateEmployeeComponent = /*#__PURE__*/function () {
        function UpdateEmployeeComponent(employeeService, route, router) {
          _classCallCheck(this, UpdateEmployeeComponent);

          this.employeeService = employeeService;
          this.route = route;
          this.router = router;
          this.employee = new _services_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]();
          this.noAccess = false;
        }

        _createClass(UpdateEmployeeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.noAccess = false;
            this.id = this.route.snapshot.params.id;
            this.employeeService.getEmployeeById(this.id).subscribe(function (data) {
              _this7.employee = data;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this8 = this;

            this.employeeService.updateEmployee(this.id, this.employee).subscribe(function (data) {
              _this8.goToEmployeeList();
            }, function (error) {
              console.log(error.status);

              if (error.status === 403) {
                _this8.noAccess = true;
                console.log('No Access');
              }
            });
          }
        }, {
          key: "goToEmployeeList",
          value: function goToEmployeeList() {
            this.router.navigate(['/employees']);
          }
        }]);

        return UpdateEmployeeComponent;
      }();

      UpdateEmployeeComponent.??fac = function UpdateEmployeeComponent_Factory(t) {
        return new (t || UpdateEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      UpdateEmployeeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UpdateEmployeeComponent,
        selectors: [["app-update-employee"]],
        decls: 19,
        vars: 4,
        consts: [[1, "col-md-6", "offset-md-3"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "id", "firstName", "name", "firstName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "lastName", "name", "lastName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-success"], [1, "text-danger"]],
        template: function UpdateEmployeeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Update Employee ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function UpdateEmployeeComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateEmployeeComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.employee.firstName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateEmployeeComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.employee.lastName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Email Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateEmployeeComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.employee.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, UpdateEmployeeComponent_p_16_Template, 2, 0, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employee.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employee.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employee.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.noAccess);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1lbXBsb3llZS91cGRhdGUtZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UpdateEmployeeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-update-employee',
            templateUrl: './update-employee.component.html',
            styleUrls: ['./update-employee.component.css']
          }]
        }], function () {
          return [{
            type: _services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /opt/springboot/ang-sprng/Angular-10-Spring-Boot-CRUD-Full-Stack-App/angular-frontend/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map