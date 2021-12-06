import { Typography } from "@mui/material";
import { Trans } from "react-i18next";

interface Props {
  error: any;
  field: string;
}

const Error = ({ error, field }: Props) => {
  return error ? (
    <Typography color="error">
      <Trans i18nKey="Form.Error.required" values={{ field }} />
    </Typography>
  ) : null;
};

export default Error;
