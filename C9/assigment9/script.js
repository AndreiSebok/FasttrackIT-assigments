import Task from "./2task.js";
        import Teacher from "./1teacher.js";
        import Student from "./3student.js";

        let task1 = new Task ("chimie", "c1", false, 9, 10);
        let task2 = new Task ("geografie", "g1", false, 10, 11);
        let task3 = new Task ("math", "m1", false, 11, 12);
        let task4 = new Task ("info", "i1", false, 12, 13);

        function generate(){
            let teacher1 = new Teacher ("Corpodean", "CT1", "chimie");
            let teacher2 = new Teacher ("Tetcu", "TT1", "geografie");
            let teacher3 = new Teacher ("Zeriu", "ZT1", "math");
            let teacher4 = new Teacher ("Balan", "BT1", "info")
            
            let student1 = new Student ("Adam", "A1", "AdamJohnson");
            student1.assignTasks([task1, task3]);
            let student2 = new Student ("Alin", "A2", "AlinCiurdas");
            student2.assignTasks([task3]);
            let student3 = new Student ("Ema", "E3", "EmaWatson");
            student3.assignTasks([task2, task3]);
            let student4 = new Student ("Tabita", "T4", "TabitaMaha");
            student4.assignTasks([task1, task4]);

            teacher1.assignStudents([student1, student4]);
            teacher2.assignStudents([student3]);
            teacher3.assignStudents([student1, student2, student3]);
            teacher4.assignStudents([student4]);

            teacher1.describeMe();
            teacher2.describeMe();
            teacher3.describeMe();
            teacher4.describeMe();
        }