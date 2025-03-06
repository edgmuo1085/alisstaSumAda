import { NgModule } from '@angular/core';
import { FilterCompaniesPipe } from './filterCompanies.pipe';
import { MunicipiosFilterPipe } from './municipiosFilter.pipe';
import { RecommendationTypePipe } from './recommendation-type.pipe';
import { SearchCompanyListPipe } from './search-company-list.pipe';
import { SearchResendCodePipe } from './search-resend-code.pipe';

@NgModule({
  declarations: [SearchCompanyListPipe, RecommendationTypePipe, SearchResendCodePipe, FilterCompaniesPipe, MunicipiosFilterPipe],
  exports: [SearchCompanyListPipe, RecommendationTypePipe, SearchResendCodePipe, FilterCompaniesPipe, MunicipiosFilterPipe],
})
export class PipesModule {}
