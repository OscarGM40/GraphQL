import database from "../data";
import { ICourse, IStudent } from "../interfaces";

/* DOS Dar solución a las definiciones anteriores */
export const queryResolvers = {
  Query: {
    students(_:object,{},__:{},___:object): {
      status:boolean;
      message:string;
      list:IStudent[]
    } 
    {
      return {
        status:true,
        message:"Lista correctamente cargada",
        list:database.students
      };
    },
    studentById(_:object, args: {id:string} ): {
      status:boolean;
      message:string;
      item: IStudent | null;
    }
    {
      const student = database.students.find(
        (student:IStudent) => student.id === args.id);

      return { 
        status:student === undefined ? false : true,
        message:student 
          ? "Estudiante correctamente cargado"
          : "Estudiante no encontrado con el id "+args.id,
        item: student ? student: null
      }
    },
    courses(): {
      status: boolean;
      message: string;
      list: ICourse[]
    } {
      return {
        status: true,
        message: "Lista correctamente cargada",
        list: database.courses
      };
    },
    courseById(_: object, args: { id: string }): {
      status: boolean;
      message: string;
      item: ICourse | null;
    } {
      const course = database.courses.find(
        (course: ICourse) => course.id === args.id);

      return {
        status: course === undefined ? false : true,
        message: course
          ? "Curso correctamente cargado"
          : "Curso no encontrado con el id " + args.id,
        item: course ? course : null
      }
    },

  }
};