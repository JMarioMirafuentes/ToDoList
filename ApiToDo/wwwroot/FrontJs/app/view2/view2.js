"use strict";

angular
  .module("myApp.view2", ["ngRoute"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view2", {
        templateUrl: "view2/view2.html",
        controller: "View2Ctrl",
      });
    },
  ])
  .controller("View2Ctrl", [
    "$scope",
    "$http",
    function ($scope, $http) {
      $scope.tareas = [];
      $scope.tarea = {
        Id: 0,
        Titulo: "",
        Descripcion: "",
        FechaCreacion: "",
        Estado: false,
      };
      $scope.isEditing = false;
      $scope.isVisible = false;

      $scope.submitForm = function (form) {
        if (form.$valid) {
          if ($scope.isEditing) {
            $http
              .put(
                "https://localhost:44356/api/tareas/" + $scope.tarea.Id,
                $scope.tarea
              )
              .then(
                function (response) {
                  $scope.getTareas();
                  $scope.resetForm();
                  Swal.fire(
                    "Procesado correctamente",
                    "La tarea ha sido actualizada.",
                    "success"
                  );
                  $scope.isEditing = false;
                },
                function (error) {
                  Swal.fire(
                    "Error",
                    "No se pudo actualizar la tarea.",
                    "error"
                  );
                }
              );
          } else {
            $http.post("https://localhost:44356/api/tareas", $scope.tarea).then(
              function (response) {
                $scope.tareas.push(response.data);
                $scope.resetForm();
                Swal.fire(
                  "Procesado correctamente",
                  "La tarea ha sido agregada.",
                  "success"
                );
              },
              function (error) {
                Swal.fire("Error", "No se pudo agregar la tarea.", "error");
              }
            );
          }
        } else {
          Swal.fire(
            "Error",
            "Por favor, completa todos los campos requeridos.",
            "error"
          );
        }
      };

      $scope.getTareas = function () {
        $http.get("https://localhost:44356/api/tareas").then(
          function (response) {
            $scope.tareas = response.data.map((task) => {
              task.FechaCreacion = new Date(task.FechaCreacion);
              return task;
            });
          },
          function (error) {
            console.error("Error al obtener tareas:", error);
          }
        );
      };

      $scope.deleteTask = function (t) {
        Swal.fire({
          title: "¿Estás seguro?",
          text: "¡No podrás revertir esta acción!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            $http.delete("https://localhost:44356/api/Tareas/" + t.Id).then(
              function (response) {
                Swal.fire(
                  "Eliminado",
                  "La tarea ha sido eliminada.",
                  "success"
                );
                $scope.getTareas();
              },
              function (error) {
                Swal.fire("Error", "No se pudo eliminar la tarea.", "error");
                console.error("Error al eliminar la tarea:", error);
              }
            );
          }
        });
      };

      $scope.updateEstado = function (t) {
        Swal.fire({
          title: "¿Cambiar estado?",
          text: "¿Estás seguro de que deseas cambiar el estado de esta tarea?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, cambiar",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            $http
              .put(
                "https://localhost:44356/api/Tareas/" + t.Id + "/Estado",
                t.Estado
              )
              .then(
                function (response) {
                  Swal.fire(
                    "Actualizado",
                    "El estado de la tarea ha sido cambiado.",
                    "success"
                  );
                  $scope.getTareas();
                },
                function (error) {
                  Swal.fire(
                    "Error",
                    "No se pudo actualizar el estado de la tarea.",
                    "error"
                  );
                  console.error(
                    "Error al actualizar el estado de la tarea:",
                    error
                  );
                }
              );
          }
        });
      };

      $scope.editTask = function (task) {
        $scope.isEditing = true;
        task.FechaCreacion = new Date(task.FechaCreacion);
        $scope.tarea = angular.copy(task);
        isVisible = false;
      };

      $scope.startNewTask = function () {
        $scope.isEditing = false;
        $scope.isVisible = true;
        $scope.resetForm();
      };

      $scope.cancelEdit = function () {
        $scope.isEditing = false;
        $scope.isVisible = false;
        $scope.resetForm();
      };
      $scope.resetForm = function () {
        $scope.tarea = {
          Id: 0,
          Titulo: "",
          Descripcion: "",
          FechaCreacion: "",
          Estado: false,
        };

        if ($scope.tareaForm) {
          $scope.tareaForm.$setPristine();
          $scope.tareaForm.$setUntouched();
        }
      };

      $scope.getTareas();
    },
  ]);
