import { Component, Signal, computed } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student';
import { Student } from '../../models/student';
import { CapitalizeFirstPipe } from '../../pipes/capitalize-first-pipe';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, CapitalizeFirstPipe],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList { 
  students: Signal<Student[]>;
  totalMale: Signal<number>;
  totalFemale: Signal<number>;

  constructor(private readonly student: StudentService) {
    this.students = this.student.getStudents();

    this.totalMale = computed(() => this.students().filter(s => s.gender === 'Male').length);
    this.totalFemale = computed(() => this.students().filter(s => s.gender === 'Female').length);
  }
}