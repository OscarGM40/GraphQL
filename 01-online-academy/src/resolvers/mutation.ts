import data from "../data";
import { ICourse, IStudent } from "../interfaces";


/* DOS Dar solución a las definiciones anteriores */
export const mutationResolvers = {
  Mutation: {
    /**
     * Aqui van todas las soluciones de las mutations del schema 
     * 
     * addCourse(course:CourseInput!):Result!
     * updateCourse(course:CourseInput!):Result!
     * deleteCourse(id:ID!):Result!
     * 
     * addStudent(student:StudentInput!):Result!
     * updateStudent(student:StudentInput!):Result!
     * deleteStudent(id:ID!):Result!
     *  
     * */
    addCourse: (root: object, args:{course: ICourse}):{
      status: boolean,
      message: string,
      item:ICourse | null
    } => {
      /* puedo validar que el nombre del curso no esté repetido.O cualquier validación que decida.En este ejemplo simplemente miraremos que no se introduzca el mismo curso */

      const courseExists = data.courses.filter( course => course.title === args.course.title).length > 0 ;

      if(courseExists){
        return {
          status: false,
          message: "Course already exists",
          item: null
        }
      }
      args.course.id = String(data.courses.length + 1);
      data.courses.push(args.course);
      return {
        status: true,
        message: "Course "+ args.course.title+" added successfully",
        item: args.course
      };
    },
    updateCourse: (root: object, args:{course: ICourse}):{
      status: boolean,
      message: string,
      item:ICourse | null
    } => {
      const courseIndex = data.courses.findIndex( course => course.id === args.course.id);
      if(courseIndex === -1){
        return {
          status: false,
          message: "Course not found",
          item: null
        }
      }
      data.courses[courseIndex] = args.course;
      return {
        status: true,
        message: "Course "+ args.course.title+" updated successfully",
        item: args.course
      };
  },
  deleteCourse: (root: object, args:{id: string}):{
    status: boolean,
    message: string,
    item:ICourse | null
  } => {
    const courseIndex = data.courses.findIndex( course => course.id === args.id);
    if(courseIndex === -1){
      return {
        status: false,
        message: "Course not found",
        item: null
      }
    }
    data.courses.splice(courseIndex,1);
    return {
      status: true,
      message: "Course deleted successfully",
      item: null
    };
  },
  addStudent: (root: object, args:{student: IStudent}):{
    status: boolean,
    message: string,
    item:IStudent| null
  } => {
    /* no queremos un estudiante con el mismo nombre */
    
    const studentExists = data.students.filter( student => student.name === args.student.name).length > 0 ;
    
    if(studentExists){
      return {
        status: false,
        message: "Student already exists",
        item: null
      }
    }
    args.student.id = String(data.students.length + 1);
    data.students.push(args.student);
    return {
      status: true,
      message: "Student "+ args.student.name+" added successfully",
      item: args.student
    };
  },
  updateStudent: (root: object, args:{student: IStudent}):{
    status: boolean,
    message: string,
    item:IStudent| null
  } => {
    const studentIndex = data.students.findIndex( student => student.id === args.student.id);
    if(studentIndex === -1){
      return {
        status: false,
        message: "Student not found",
        item: null
      }
    }
    data.students[studentIndex] = args.student;
    return {
      status: true,
      message: "Student "+ args.student.name+" updated successfully",
      item: args.student
    };
  },
  deleteStudent: (root: object, args:{id: string}):{
    status: boolean,
    message: string,
    item:IStudent| null
  } => {
    const studentIndex = data.students.findIndex( student => student.id === args.id);
    if(studentIndex === -1){
      return {
        status: false,
        message: "Student not found",
        item:null
      }
    }
    data.students.splice(studentIndex, 1)
    return {
      status: true,
      message: "Student deleted successfully",
      item: null
    };
   }
  } /* fin de las mutations */
};