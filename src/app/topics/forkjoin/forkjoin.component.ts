import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forkjoin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forkjoin.component.html',
  styleUrl: './forkjoin.component.scss',
})
export class ForkjoinComponent implements OnInit {
  isForkJoinEnabled = false;
  schoolsCount = 0;
  hospitalsCount = 0;
  banksCount = 0;
  isWidgetOneSpinner = false;
  isWidgetTwoSpinner = false;
  isWidgetThreeSpinner = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.isWidgetOneSpinner = true;
    this.isWidgetTwoSpinner = true;
    this.isWidgetThreeSpinner = true;
    if (this.isForkJoinEnabled) {
      this.getAllData();
    } else {
      this.getData();
    }
  }

  refreshData() {
    this.schoolsCount = 0;
    this.hospitalsCount = 0;
    this.banksCount = 0;
    this.ngOnInit();
  }

  toggleForkJoin(event: Event) {
    this.isForkJoinEnabled = (event.target as HTMLInputElement).checked;
  }

  getData() {
    this.dataService.getWidgetOneData().subscribe((data: any) => {
      this.schoolsCount = data;
      this.isWidgetOneSpinner = false;
    });
    this.dataService.getWidgetTwoData().subscribe((data: any) => {
      this.hospitalsCount = data;
      this.isWidgetTwoSpinner = false;
    });
    this.dataService.getWidgetThreeData().subscribe((data: any) => {
      this.banksCount = data;
      this.isWidgetThreeSpinner = false;
    });
  }

  getAllData() {
    this.dataService.getAllData().subscribe((res) => {
      this.schoolsCount = res[0];
      this.hospitalsCount = res[1];
      this.banksCount = res[2];
      this.isWidgetOneSpinner = false;
      this.isWidgetTwoSpinner = false;
      this.isWidgetThreeSpinner = false;
    });
  }
}
