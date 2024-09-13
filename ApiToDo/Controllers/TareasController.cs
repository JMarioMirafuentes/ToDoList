
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Data;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Data.Entity;


namespace ApiToDo.Controllers
{
    public class TareasController : ApiController
    {
        private TaskManagerEntities db = new TaskManagerEntities();

        [HttpGet]
        public IHttpActionResult GetTareas()
        {
            var tareas = db.Tareas.ToList();
            return Ok(tareas);
        }

        [HttpGet]
        public IHttpActionResult GetTarea(int id)
        {
            var tarea = db.Tareas.Find(id);
            if (tarea == null)
            {
                return NotFound();
            }
            return Ok(tarea);
        }

        [HttpPost]
        public IHttpActionResult PostTarea([FromBody] Tareas tarea)
        {
         

            db.Tareas.Add(tarea);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tarea.Id }, tarea);
        }

        [HttpPut]
        public IHttpActionResult PutTarea(int id, [FromBody] Tareas tarea)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tarea.Id)
            {
                return BadRequest();
            }

            db.Entry(tarea).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TareaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [HttpDelete]
        public IHttpActionResult DeleteTarea(int id)
        {
            var tarea = db.Tareas.Find(id);
            if (tarea == null)
            {
                return NotFound();
            }

            db.Tareas.Remove(tarea);
            db.SaveChanges();

            return Ok(tarea);
        }

        private bool TareaExists(int id)
        {
            return db.Tareas.Count(e => e.Id == id) > 0;
        }

   
        [HttpPut]
        [Route("api/Tareas/{id}/Estado")]
        public IHttpActionResult UpdateEstadoTarea(int id, [FromBody] bool estado)
        {
            var tarea = db.Tareas.Find(id);
            if (tarea == null)
            {
                return NotFound();
            }
            tarea.Estado = estado;

            db.SaveChanges();

            return Ok(tarea);
        }

    }
}