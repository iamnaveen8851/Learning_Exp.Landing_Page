import {
  Flex,
  Box,
  Spacer,
  Icon,
  Link,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

// const CustomLogo = () => {
//   return (
//     <div
//       style={{
//         width: "18%",
//         // border: "2px solid green",
//         paddingLeft: "2%",
//       }}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="311.73"
//         height="70.154"
//         viewBox="0 0 311.73 70.154"
//       >
//         <g
//           id="Group_1758"
//           data-name="Group 1758"
//           transform="translate(-100 -30)"
//         >
//           <g
//             id="Group_1"
//             data-name="Group 1"
//             transform="translate(-3.27 -63.055)"
//           >
//             <rect
//               id="Rectangle_1"
//               data-name="Rectangle 1"
//               width="45"
//               height="15"
//               rx="9"
//               transform="translate(103.27 135.481) rotate(-45)"
//               fill="#7feb00"
//             />
//             <rect
//               id="Rectangle_2"
//               data-name="Rectangle 2"
//               width="45"
//               height="15"
//               rx="9"
//               transform="translate(121.27 150.481) rotate(-45)"
//               fill="#ffec05"
//             />
//           </g>
//           <text
//             id="Learning_Exp."
//             data-name="Learning Exp."
//             transform="translate(181.73 78)"
//             fill="#fff"
//             font-size="35"
//             font-family="Poppins-Medium, Poppins"
//             font-weight="500"
//           ></text>
//         </g>
//       </svg>
//     </div>
//   );
// };
const CustomLogo = () => {
    return (
      <div
        style={{
          width: "16%",
          // border: "2px solid green",
          paddingLeft: "2%",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="311.73"
          height="68"
          viewBox="0 0 311.73 70.154"
        >
          <g
            id="Group_1758"
            data-name="Group 1758"
            transform="translate(-100 -30)"
          >
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(-3.27 -63.055)"
            >
              <rect
                id="Rectangle_1"
                data-name="Rectangle 1"
                width="48"
                height="13px"
                rx="9"
                transform="translate(103.27 135.481) rotate(-45)"
                fill="#7feb00"
              />
              <rect
                id="Rectangle_2"
                data-name="Rectangle 2"
                width="48px"
                height="13px"
                rx="9"
                transform="translate(121.27 150.481) rotate(-45)"
                fill="#ffec05"
              />
            </g>
            <text
              id="Learning_Exp."
              data-name="Learning Exp."
              transform="translate(181.73 78)"
              fill="#fff"
              font-size="35"
              font-family="Poppins-Medium, Poppins"
              font-weight="500"
            ></text>
          </g>
        </svg>
      </div>
    );
  };

function Navbar() {
  return (
    <>
      <Flex
       position={"sticky"}
       top={"0%"}
    //    zIndex={10}
        className="nav-container"
        border={"1px solid black"}
        justify={"space-around"}
        alignItems={"center"}
      >
        <Box color={"black"} ml="5%" border={"1px solid black"}>
          {/* <List spacing={2}>
            <ListItem display={"flex"} alignItems={"center"}>
              <ListIcon as={CustomLogo} color="green.500" />
              <Link
                color="#FFFFFF"
                _hover={{
                  transition: "transform 0.1s ease-in-out",
                  transform: "scale(1.1)",
                }}
                fontSize={"24px"}
                fontWeight={"600"}
              >
                {" "}
                Learning Exp.
              </Link>
            </ListItem>
          </List> */}
            <List spacing={2}>
            <ListItem display={"flex"} alignItems={"center"}>
              <ListIcon as={CustomLogo} color="green.500" />
              &nbsp;&nbsp;
              <Link
                color="black"
                _hover={{
                  transition: "transform 0.1s ease-in-out",
                  transform: "scale(1.1)",
                }}
                fontSize={"24px"}
                fontWeight={"600"}
              >
                {" "}
                Learning Exp.
              </Link>
            </ListItem>
          </List>
        </Box>
        <Spacer />
        <Box
          w="50%"
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          gap="5%"
          color={"#FFFFFF"}
          border={"1px solid red"}
          fontWeight={"500"}
        >
          <Link
            href="/"
            _hover={{
              textDecoration: "underline",
              textDecorationThickness: "14%",
              textDecorationColor: "#FFEC05",
              transition: "transform 0.1s ease-in-out",
              transform: "scale(1.1)",
            }}
          >
            Home
          </Link>
          <Link
            href="/services-us"
            _hover={{
              textDecoration: "underline",
              textDecorationThickness: "14%",
              textDecorationColor: "#FFEC05",
              transition: "transform 0.1s ease-in-out",
              transform: "scale(1.1)",
            }}
          >
            Services Us
          </Link>
          <Link
            href="/why-us"
            _hover={{
              textDecoration: "underline",
              textDecorationThickness: "14%",
              textDecorationColor: "#FFEC05",
              transition: "transform 0.1s ease-in-out",
              transform: "scale(1.1)",
            }}
          >
            Why Us
          </Link>
          <Link
            href="/our-goals"
            _hover={{
              textDecoration: "underline",
              textDecorationThickness: "14%",
              textDecorationColor: "#FFEC05",
              transition: "transform 0.1s ease-in-out",
              transform: "scale(1.1)",
            }}
          >
            Our Goals
          </Link>
          <Link
            href="/contact-us"
            backgroundColor={"#FFEC05"}
            p={2}
            borderRadius={"30px"}
            color={"black"}
            _hover={{
              textDecoration: "underline",
              textDecorationThickness: "14%",
              textDecorationColor: "black",
              transition: "transform 0.1s ease-in-out",
              transform: "scale(1.1)",
            }}
          >
            Contact Us
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export default Navbar;
