// import NextLink from 'next/link';
import * as Yup from "yup";
import { useFormik } from "formik";
// import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  // Link,
  Stack,
  TextField,
  // Typography
} from "@mui/material";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
// import { paths } from 'src/paths';

const initialValues = {
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object({
  password: Yup.string().min(7, "Must be at least 7 characters").max(255).required("Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const Page = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <Card elevation={16}>
      <CardHeader sx={{ pb: 0 }} title="Reset Password" />
      <CardContent>
        <form noValidate onSubmit={formik.handleSubmit}>
          <Stack spacing={3}>
            <TextField
              error={!!(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
            />
            <TextField
              error={!!(formik.touched.passwordConfirm && formik.errors.passwordConfirm)}
              fullWidth
              helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
              label="Password (Confirm)"
              name="passwordConfirm"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.passwordConfirm}
            />
          </Stack>
          <Button fullWidth size="large" sx={{ mt: 2 }} type="submit" variant="contained">
            Reset
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
