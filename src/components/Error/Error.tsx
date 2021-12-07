import { Typography } from "@mui/material";
import { Trans } from "react-i18next";

import { Styles } from "../../types";

const styles: Styles = {
  error: {
    marginBottom: "1rem",
  },
};

interface Props {
  error: any;
  field: string;
}

const Error = ({ error, field }: Props) => {
  return error ? (
    <Typography color="error" sx={styles.error}>
      <Trans i18nKey="Error.required" values={{ field }} />
    </Typography>
  ) : null;
};

export default Error;
