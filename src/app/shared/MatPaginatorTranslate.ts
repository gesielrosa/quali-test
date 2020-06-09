import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class MatPaginatorTranslate extends MatPaginatorIntl {

  firstPageLabel = 'Primeira página';
  itemsPerPageLabel = 'Itens por página';
  lastPageLabel = 'Última página';
  nextPageLabel = 'Próxima página';
  previousPageLabel = 'Página anterior';

  constructor() {
    super();
  }

}
