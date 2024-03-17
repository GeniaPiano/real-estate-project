import { PropertiesList } from "../../components/organisms/PropertiesList/ProperstiesList";
import { FilterProperties } from "../../components/organisms/FilterProperties/FilterProperties.tsx";

export const HomePage = () => (
  <>
    <FilterProperties />
    <PropertiesList />
  </>
);
