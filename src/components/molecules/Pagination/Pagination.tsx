import { Box, Button } from "@mui/material";
import { IconButtonWithTooltip } from "../../atoms/IconButtonWithTooltip/IconButtonWithToolitp";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { PaginationProps } from "./types.ts";
import {FC} from "react";
import {usePropertiesStore} from "../../../stores/usePropertiesStore.ts";

export const Pagination: FC<PaginationProps> = ({ total, perPage, onPageChange }) => {
  const { currentPage, setCurrentPage } = usePropertiesStore()
  const pageCount = Math.ceil(total / perPage);
  const handlePreviousPage = () => {
    if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageCount) {
        setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Box marginTop={2} display="flex" justifyContent="flex-end">
      <IconButtonWithTooltip
        icon={<ArrowLeftIcon />}
        handleClick={handlePreviousPage}
        title="Previous page"
        ariaLabel="Previous page"
        disabled={currentPage === 1}
      />
      {Array.from({ length: pageCount }, (_, index) => (
        <Button
          key={index}
          onClick={() => onPageChange(index + 1)}
          disabled={currentPage === index + 1}
          data-testid={`button_${index}`}
        >
          {index + 1}
        </Button>
      ))}
      <IconButtonWithTooltip
        icon={<ArrowRightIcon />}
        handleClick={handleNextPage}
        title="Next page"
        ariaLabel="Next page"
        disabled={currentPage === pageCount}
      />
    </Box>
  );
};
