import { heading } from "@/styled-system/recipes";
import { styled } from "@/styled-system/jsx";

const Heading = styled("h1", heading);

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <Heading size="large" color="heavy">
        I am large
      </Heading>
      <Heading size="small" color="light">
        I am small
      </Heading>
    </>
  );
}
