import { ICourse } from "../interfaces";

/* DOS Dar solución a las definiciones anteriores */
export const mutationResolvers = {
  Mutation: {
    /**
     * Aqui van todas las soluciones de las mutations del schema 
     * 
     * addCourse(id:ID!):Boolean
     * updateCourse(id:ID!):Boolean
     * deleteCourse(id:ID!):Boolean
     * 
     * */
    addCourse: (root: object, args:{course: ICourse}) => {
      console.log(args.course);
      return true;

    }
  }
};