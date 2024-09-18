import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import { LogInForm } from "../../components/Form/LogInForm";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      render(<LogInForm onSubmit={onSubmit} errorMsg={""} />);

      fireEvent.changeText(screen.getByPlaceholderText("username"), "kalle");
      fireEvent.changeText(screen.getByPlaceholderText("password"), "password");
      fireEvent.press(screen.getByText("Submit"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0].username).toBe("kalle");
        expect(onSubmit.mock.calls[0][0].password).toBe("password");
        // expect the onSubmit function to have been called once and with a correct first argument
      });
    });
  });
});
