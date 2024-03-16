import { useState, useEffect } from "react";
import { propertiesService } from "../../services/PropertiesServices";

export const useProperty = (id) => {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const property = await propertiesService.fetchById(id);
      setProperty(property);
    };
    fetchProperty();
  }, [id]);

  return property;
};
