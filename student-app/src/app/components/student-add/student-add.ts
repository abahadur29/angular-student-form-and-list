import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './student-add.html',
  styleUrl: './student-add.css'
})
export class StudentAdd {
  studentForm: FormGroup;
  
  classes = ['Class 6', 'Class 7', 'Class 8', 'Class 9'];
  subjects = ['Mathematics', 'Science', 'English', 'Computer Science', 'History'];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      class: ['', Validators.required],
      gender: ['', Validators.required],
      hasHobby: [false], 
      hobby: [''],      
      favouriteSubject: ['']
    });
  }

  get f() { return this.studentForm.controls; }

  getClassMessage(): string {
    const selectedClass = this.studentForm.get('class')?.value;
    if (selectedClass === 'Class 9') return "You will appear in board exams soon. All the Best !!";
    if (selectedClass === 'Class 6') return "Welcome to middle school!";
    if (selectedClass) return "Education and hobby go hand in hand!";
    return "";
  }

  onSubmit() {
    if (this.studentForm.valid) {
      
      const currentStudents = this.studentService.getStudents()();

      const nextId = currentStudents.length > 0 
        ? Math.max(...currentStudents.map(s => s.id)) + 1 
        : 1;

      const newStudent = {
        id: nextId, 
        ...this.studentForm.value
      };

      this.studentService.addStudent(newStudent);


      this.router.navigate(['/home']);
    } else {
      this.studentForm.markAllAsTouched();
    }
  }
}