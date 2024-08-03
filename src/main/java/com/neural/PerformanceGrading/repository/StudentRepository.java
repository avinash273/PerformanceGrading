package com.neural.PerformanceGrading.repository;

import com.neural.PerformanceGrading.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.stream.Collectors;

import java.util.List;

@Repository
public class StudentRepository {

    private JdbcTemplate jdbc;

    public JdbcTemplate getJdbc() {
        return jdbc;
    }

    @Autowired
    public void setJdbc(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public void save(Student student) {
        String insertQuery = "INSERT INTO students (id, name, marks) VALUES (?, ?, ?)";
        String deleteQuery = "DELETE FROM students WHERE id = ?";
        String updateQuery = "UPDATE students SET name = ? WHERE id = ?";
        int deleteSuccess = jdbc.update(deleteQuery, student.getId());
        int insertSuccess = jdbc.update(insertQuery, student.getId(), student.getName(), student.getMarks());
        int updateSuccess = jdbc.update(updateQuery, "avinash", student.getId());
        System.out.println("Deleted: " + deleteSuccess);
        System.out.println("Inserted: " + insertSuccess);
        System.out.println("updateSuccess: " + updateSuccess);
        System.out.println("Saving student: " + student);
    }

    public List<Student> findAll() {
        String query = "SELECT * FROM students limit 100";

        return jdbc.query(query, (rs, rownum) -> {
                    Student student = new Student();
                    student.setId(rs.getInt("id"));
                    student.setName(rs.getString("name"));
                    student.setMarks(rs.getInt("marks"));
                    return student;
                }
        );
    }
}
