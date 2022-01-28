import data from "../data";

const typesResolver = {
  Student: {
    website: (root: { website: string }) => {
      return "Web:".concat(root.website.replace("http://", "https://"));
    },
    courses: (root: { courses: string[] }) => {
      return data.courses.filter(
        course => root.courses.includes(course.id))
    }

  },
  Course: {
    path: (root: { path: string }) => {
      return "https://udemy.com/course".concat(root.path);
    },
    students: (root: { id: string }) => {
      // console.log(root,'root')
      return data.students.filter(
        student => student.courses.indexOf(root.id) !== -1)
    }
  },
  Data: {
    __resolveType(obj: { name: string, title: string }) {
      if (obj.name) {
        return "Student";
      } else if (obj.title) {
        return "Course";
      } else {
        return null;
      }
    }
  }
}

export default typesResolver;