import { Trans } from "react-i18next";

interface Props {
  error: any;
  field: string;
}

const Error = ({ error, field }: Props) => {
  return error ? <Trans i18nKey="Form.required" values={{ field }} /> : null;
};

export default Error;
