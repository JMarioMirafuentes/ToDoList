USE [TaskManager]
GO
/****** Object:  Table [dbo].[Tareas]    Script Date: 12/09/2024 06:58:37 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tareas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Titulo] [nvarchar](1000) NOT NULL,
	[Descripcion] [nvarchar](500) NOT NULL,
	[FechaCreacion] [date] NOT NULL,
	[Estado] [bit] NOT NULL,
 CONSTRAINT [PK_Tareas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Tareas] ON 
GO
INSERT [dbo].[Tareas] ([Id], [Titulo], [Descripcion], [FechaCreacion], [Estado]) VALUES (12, N'DISEÑO DE BD', N'SE REQUIERE DISEÑAR MODELO DE BASE DE DATOS', CAST(N'2024-09-24' AS Date), 0)
GO
INSERT [dbo].[Tareas] ([Id], [Titulo], [Descripcion], [FechaCreacion], [Estado]) VALUES (13, N'PRUEBA ANTEOIR2', N'PRUEBA ANTERIOIR', CAST(N'2024-09-10' AS Date), 0)
GO
INSERT [dbo].[Tareas] ([Id], [Titulo], [Descripcion], [FechaCreacion], [Estado]) VALUES (15, N'Configurar Entorno de Desarrollo', N'Instalar y configurar todas las herramientas necesarias para el proyecto (IDE, gestores de paquetes, control de versiones, etc.).', CAST(N'2024-09-16' AS Date), 0)
GO
INSERT [dbo].[Tareas] ([Id], [Titulo], [Descripcion], [FechaCreacion], [Estado]) VALUES (16, N'Diseñar la Arquitectura del Proyecto', N'Definir la estructura general del proyecto, incluyendo la organización de los archivos y la selección de tecnologías.', CAST(N'2024-10-01' AS Date), 0)
GO
INSERT [dbo].[Tareas] ([Id], [Titulo], [Descripcion], [FechaCreacion], [Estado]) VALUES (17, N'Implementar Autenticación de Usuarios', N'Desarrollar el módulo que permita a los usuarios autenticarse en el sistema, utilizando OAuth o JWT.', CAST(N'2024-10-01' AS Date), 0)
GO
INSERT [dbo].[Tareas] ([Id], [Titulo], [Descripcion], [FechaCreacion], [Estado]) VALUES (18, N'Crear el Backend con API REST', N'Implementar el backend con endpoints que gestionen las operaciones CRUD para las entidades principales del sistema.', CAST(N'2024-09-10' AS Date), 0)
GO
INSERT [dbo].[Tareas] ([Id], [Titulo], [Descripcion], [FechaCreacion], [Estado]) VALUES (19, N'Desarrollar el Frontend', N'Crear el frontend del proyecto con Angular o React, incluyendo el diseño de la interfaz y la interacción con el backend.', CAST(N'2024-09-17' AS Date), 0)
GO
INSERT [dbo].[Tareas] ([Id], [Titulo], [Descripcion], [FechaCreacion], [Estado]) VALUES (20, N'Integrar Base de Datos', N'Diseñar el esquema de base de datos y configurar la conexión entre el backend y el servidor de base de datos (SQL Server, MySQL, etc.).', CAST(N'2024-09-15' AS Date), 0)
GO
INSERT [dbo].[Tareas] ([Id], [Titulo], [Descripcion], [FechaCreacion], [Estado]) VALUES (21, N'Gestionar Errores y Excepciones', N'Implementar un sistema robusto de gestión de errores y excepciones para garantizar la estabilidad del proyecto.', CAST(N'2024-09-01' AS Date), 0)
GO
INSERT [dbo].[Tareas] ([Id], [Titulo], [Descripcion], [FechaCreacion], [Estado]) VALUES (22, N'Realizar Pruebas Unitarias', N'Desarrollar y ejecutar pruebas unitarias en los módulos clave para garantizar que funcionan según lo esperado.', CAST(N'2024-09-17' AS Date), 0)
GO
INSERT [dbo].[Tareas] ([Id], [Titulo], [Descripcion], [FechaCreacion], [Estado]) VALUES (23, N'Optimización del Rendimiento', N'Identificar y optimizar las áreas del proyecto que impactan negativamente en el rendimiento.', CAST(N'2024-09-10' AS Date), 0)
GO
SET IDENTITY_INSERT [dbo].[Tareas] OFF
GO
