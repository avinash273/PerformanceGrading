package com.neural.PerformanceGrading.controller;

import com.neural.PerformanceGrading.model.Student;
import com.neural.PerformanceGrading.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * http://localhost:8080/app/test
 */
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/app")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/test")
    public List<Student> getStudentService() {
        return studentService.getStudents();
    }

}
