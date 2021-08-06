import { Component, OnInit, ViewChild } from '@angular/core';
import { employeesData } from './localData';
import { IGridKeydownEventArgs, IgxColumnComponent, CellType, IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public localData: any[];
  public title = 'Grid';

  @ViewChild('grid1', { static: true })
  public grid: IgxGridComponent;

  constructor() { }

  ngOnInit() {
    this.localData = employeesData;
  }

  public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }

  public customKeydown(args: IGridKeydownEventArgs) {
    const target: CellType = args.target as CellType;
    this.grid.columnVisibilityChanged.subscribe();
}
}
