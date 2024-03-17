import { PropertiesList } from "../../components/organisms/PropertiesList/ProperstiesList";
import { FilterProperties } from "../../components/organisms/FilterProperties/FilterProperties.tsx";

export const HomePage = () => (
  <div data-testid='home-page'>
    <FilterProperties />
    <PropertiesList />
  </div>
);
