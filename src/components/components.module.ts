import { NgModule } from '@angular/core';
import { RechercheComponent } from './recherche/recherche';
import { RatingComponent } from './rating/rating';
@NgModule({
	declarations: [RechercheComponent,
    RatingComponent],
	imports: [],
	exports: [RechercheComponent,
    RatingComponent]
})
export class ComponentsModule {}
