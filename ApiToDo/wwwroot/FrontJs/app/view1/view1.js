"use strict";

angular
  .module("myApp.view1", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1", {
        templateUrl: "view1/view1.html",
        controller: "View1Ctrl",
      });
    },
  ])

  .controller("View1Ctrl", [
    "$scope",
    "$http", // Asegúrate de inyectar estos servicios
    function ($scope, $http) {
      $scope.tareas = []; // Asegúrate de inicializar la lista de tareas si la estás usando

      $scope.tarea = {
        Id: 0,
        Titulo: "",
        Descripcion: "",
        FechaCreacion: "",
        Estado: false,
      };

      $scope.submitForm = function () {
        if ($scope.tareaForm.$valid) {
          $http.post("https://localhost:44356/api/tareas", $scope.tarea).then(
            function (response) {
              $scope.tareas.push(response.data); // Agregar la tarea a la lista
              $scope.tarea = {
                // Limpiar el formulario
                Titulo: "",
                Descripcion: "",
                FechaCreacion: "",
                Estado: false,
              };
              alert("Tarea agregada exitosamente");
            },
            function (error) {
              console.error("Error al agregar tarea:", error);
              alert("Error al agregar tarea.");
            }
          );
        } else {
          alert("Por favor, completa todos los campos requeridos.");
        }
      };
    },
  ]);
