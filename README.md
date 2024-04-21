#

![alt](./img//layers.PNG)

Propuesta por Robert C. Martin. (Uncle Bob)

LA comunicación sera de los circulos exteriores(layer) a los layer inferiores pero no viceversa.

- Entities: comprende la regla de negocio fundamentales. Informacion de nuestros usuarios. Es algo bien cercano
a lo que grabamos en BD. Sin embargo es nuestra propia implementacion para la aplicacion. Deberia ser Agnostico.
No importa que la bd de datos cambie. O se le agregue mas o menos cambios en las tablas o colecciones de la BD.
  ![alt](./img/entities.PNG)
- Casos de uso: (Crear usuario, enviar correo, validar informacion, login de usuario) Especificamente realizar una tarea
  ![alt](./img/use-cases.PNG)
- Presentacion: Lo mas cercano a los que consumiran nuestro endpoints
  ![alt](./img/presentation.PNG)
- Domain: reglas que gobiernan toda la aplicacion. (aqui estaran los use-cases, adaptadores, repositiorios etc). no debe de tener dependencias externas
- infrastructure: Se crearan las implemetnaciones de los Data Sources, Repositorios. Mappers
![alt](./img/resumen.PNG)
- DTO: Data transfer Object, objetos que serviran como mensajes de layer a layer
- Data sources: Reglas de negocio, de las cuales nosotros vamos a regir la obtencion de datos (no implementacion)
- Repository: Quienes se comunicaran con nuestro data sources (al igual que data source son abstranciones mas no implementaciones)
- Infraestructura = Conexion a BBDD, estado entrada y salida
- Aplicacion = casos de uso (registrar usuario, crear producto)
- Dominio = modelo

Abstracciones: Definir reglas

![alt](./img/infra.png)
