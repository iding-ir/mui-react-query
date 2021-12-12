import { Typography } from "@mui/material";
import { Trans } from "react-i18next";

import { styles } from "./styles";

interface Props {
  error: any;
  field: string;
}

const Error = ({ error, field }: Props) => {
  return error ? (
    <Typography color="error" sx={styles.error} data-test-id="Error_REQUIRED">
      <Trans i18nKey="Error.required" values={{ field }} />
    </Typography>
  ) : null;
};

export default Error;
