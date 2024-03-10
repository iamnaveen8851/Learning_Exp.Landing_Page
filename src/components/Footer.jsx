import {
  SimpleGrid,
  Box,
  List,
  ListItem,
  ListIcon,
  Link,
  Avatar,
  Wrap,
  WrapItem,
  Text,
  Center,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";

import { useReducer } from "react";

// this is a logo
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
        height="69"
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

// social icons
const fbIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
      >
        <g id="Group_45" data-name="Group 45" transform="translate(-210 -8430)">
          <g
            id="facebook-logo_1_"
            data-name="facebook-logo (1)"
            transform="translate(98.381 8438)"
          >
            <path
              id="Path_63"
              data-name="Path 63"
              d="M132.441,7.208v-1.9a4.176,4.176,0,0,1,.04-.661,1.283,1.283,0,0,1,.18-.461.736.736,0,0,1,.454-.314,3.231,3.231,0,0,1,.835-.087h1.9V0h-3.03a4.932,4.932,0,0,0-3.778,1.248,5.257,5.257,0,0,0-1.148,3.678V7.208h-2.27V11h2.269V22h4.552V11h3.03l.4-3.791Z"
              transform="translate(0)"
              fill="#9c9ca8"
            />
          </g>
          <g
            id="Ellipse_16"
            data-name="Ellipse 16"
            transform="translate(210 8430)"
            fill="none"
            stroke="#9c9ca8"
            stroke-width="1"
          >
            <circle cx="19" cy="19" r="19" stroke="none" />
            <circle cx="19" cy="19" r="18.5" fill="none" />
          </g>
        </g>
      </svg>
    </>
  );
};

const twitterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
    >
      <g id="Group_48" data-name="Group 48" transform="translate(-268 -8430)">
        <path
          id="twitter_1_"
          data-name="twitter (1)"
          d="M21.169,50.036a9.048,9.048,0,0,1-2.5.685,4.315,4.315,0,0,0,1.909-2.4,8.673,8.673,0,0,1-2.752,1.05,4.339,4.339,0,0,0-7.507,2.968,4.468,4.468,0,0,0,.1.99,12.284,12.284,0,0,1-8.945-4.539,4.341,4.341,0,0,0,1.334,5.8,4.286,4.286,0,0,1-1.961-.535V54.1a4.36,4.36,0,0,0,3.477,4.264,4.331,4.331,0,0,1-1.138.143,3.837,3.837,0,0,1-.822-.074,4.381,4.381,0,0,0,4.055,3.023,8.72,8.72,0,0,1-5.381,1.851A8.128,8.128,0,0,1,0,63.252,12.218,12.218,0,0,0,6.657,65.2,12.267,12.267,0,0,0,19.009,52.85c0-.192-.007-.377-.016-.561A8.658,8.658,0,0,0,21.169,50.036Z"
          transform="translate(276 8392)"
          fill="#9c9ca8"
        />
        <g
          id="Ellipse_16"
          data-name="Ellipse 16"
          transform="translate(268 8430)"
          fill="none"
          stroke="#9c9ca8"
          stroke-width="1"
        >
          <circle cx="19" cy="19" r="19" stroke="none" />
          <circle cx="19" cy="19" r="18.5" fill="none" />
        </g>
      </g>
    </svg>
  );
};

const linkedinIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
    >
      <g id="Group_47" data-name="Group 47" transform="translate(-317 -8430)">
        <g
          id="linkedin-logo_1_"
          data-name="linkedin-logo (1)"
          transform="translate(328 8430.442)"
        >
          <path
            id="LinkedIn"
            d="M16.968,20.1v6.654H13.331V20.548c0-1.56-.526-2.624-1.842-2.624a2.006,2.006,0,0,0-1.866,1.411,2.789,2.789,0,0,0-.121.941v6.481H5.864s.049-10.515,0-11.6H9.5V16.8c-.007.012-.017.026-.024.037H9.5V16.8a3.586,3.586,0,0,1,3.278-1.918C15.173,14.879,16.968,16.538,16.968,20.1ZM2.059,9.558a1.949,1.949,0,0,0-2.059,2,1.938,1.938,0,0,0,2.01,2.006h.024a1.95,1.95,0,0,0,2.058-2.006A1.942,1.942,0,0,0,2.059,9.558ZM.216,26.757H3.853v-11.6H.216Z"
            transform="translate(0)"
            fill="#9c9ca8"
          />
        </g>
        <g
          id="Ellipse_17"
          data-name="Ellipse 17"
          transform="translate(317 8430)"
          fill="none"
          stroke="#9c9ca8"
          stroke-width="1"
        >
          <circle cx="19" cy="19" r="19" stroke="none" />
          <circle cx="19" cy="19" r="18.5" fill="none" />
        </g>
      </g>
    </svg>
  );
};

const pinInterest = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
    >
      <g id="Group_46" data-name="Group 46" transform="translate(-383 -8430)">
        <g id="XMLID_798_" transform="translate(361.819 8440)">
          <path
            id="XMLID_799_"
            d="M45.527,1.762A7.116,7.116,0,0,0,40.686,0a7.805,7.805,0,0,0-5.613,2.062,5.956,5.956,0,0,0-1.892,4.224,3.933,3.933,0,0,0,2.248,3.931.776.776,0,0,0,.283.055.622.622,0,0,0,.614-.482c.048-.17.158-.591.205-.773a.7.7,0,0,0-.2-.784,2.426,2.426,0,0,1-.6-1.708A4.409,4.409,0,0,1,40.408,2.2c2.411,0,3.908,1.306,3.908,3.407a6.811,6.811,0,0,1-.844,3.459,2.494,2.494,0,0,1-2.065,1.377,1.4,1.4,0,0,1-1.089-.474A1.15,1.15,0,0,1,40.1,8.929c.107-.433.254-.886.4-1.323A7.858,7.858,0,0,0,41,5.452a1.6,1.6,0,0,0-1.652-1.72A2.517,2.517,0,0,0,37.106,6.5a3.948,3.948,0,0,0,.308,1.548c-.158.639-1.1,4.435-1.277,5.151-.1.418-.724,3.719.3,3.982,1.155.3,2.187-2.919,2.293-3.282.085-.3.383-1.413.566-2.1a3.589,3.589,0,0,0,2.329.858,5.285,5.285,0,0,0,4.17-1.988,7.725,7.725,0,0,0,1.568-4.88A5.507,5.507,0,0,0,45.527,1.762Z"
            transform="translate(0 0)"
            fill="#9c9ca8"
          />
        </g>
        <g
          id="Ellipse_18"
          data-name="Ellipse 18"
          transform="translate(383 8430)"
          fill="none"
          stroke="#9c9ca8"
          stroke-width="1"
        >
          <circle cx="19" cy="19" r="19" stroke="none" />
          <circle cx="19" cy="19" r="18.5" fill="none" />
        </g>
      </g>
    </svg>
  );
};

const initialState = {
  show: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "change-email": {
      return {
        ...state,
        show: !state.show,
      };
    }

    default: {
      return state;
    }
  }
}

function Footer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function handleClick() {
    dispatch({
      type: "change-email",
    });
  }

  const { show } = state;
  return (
    <>
      <Box mt="5%" position={"relative"}>
        <Center
          //   border="2px solid black"
          w={{
            base: "80%",
            sm: "70%",
            md: "70%",
            lg: "60%",
            xl: "60%",
            "2xl": "60%",
          }}
          // h={{
          //   base : "50px",
          //   sm : "70px"
          // }}
          m="auto"
          position={"absolute"}
          zIndex={1}
          top={"24%"}
          left={{
            base: "10%",
            sm: "15%",
            md: "15%",
            lg: "20%",
            xl: "20%",
          }}
        >
          <SimpleGrid
            opacity={1}
            borderRadius="16px"
            bg="#333697"
            columns={{
              base: "1",
              sm: "1",
              md: "2",
              lg: "2",
              xl: "2",
              "2xl": "2",
            }}
            spacing={{
              base: "0",
              sm: "0",
              md: "2",
              lg: "4",
              xl: "4",
              "2xl": "4",
            }}
          >
            <Box fontSize="16px" color={"#FFFFFF"} height="150px" p={4}>
              <Heading fontSize={28}>Contact Us!</Heading>
              <p>
                There are many variations of passages of Lorem Ipsum but the
                majority have suffered alteration.
              </p>
            </Box>
            <Box height="150px" p={4}>
              <InputGroup   mt="10%" size="md"  borderRadius={20}>
                <Input
                id="inputBorder"
                  bg={"#FFFFFF"}
                  borderRadius={20}
                  pr="4.5rem"
                  type="text"
                  placeholder="Email Here"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    _hover={{
                      textDecorationColor: "#FFEC05",
                      transition: "transform 0.4s ease-in-out",
                      transform: "scale(1.1)",
                    }}
                    bg="#FFEC05"
                    h="1.99rem"
                    mt="19%"
                    borderRadius={20}
                    mr="8%"
                    size="lg"
                    fontSize="12px"
                    
                    onClick={handleClick}
                  >
                    {show ? "Sent" : "Send"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </SimpleGrid>
        </Center>
      </Box>
      <br />

      <br />
      <Box
        bg="#EBEBF8"
        mt={{
          base: "52%",
          sm: "35%",
          md: "4%",
          lg: "4%",
          xl: "4%",
          "2xl": "4%",
        }}
      >
        <SimpleGrid
          p={16}
          columns={{
            base: "1",
            sm: "1",
            md: "2",
            lg: "4",
            xl: "4",
            "2xl": "4",
          }}
          spacing={10}
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
            "2xl": "100%",
          }}
          justifyContent={"space-around"}
          m={{
            base: "auto",
            sm: "auto",
            md: "auto",
            lg: "auto",
            xl: "auto",
            "2xl": "auto",
          }}
        >
          <Box>
            <List spacing={2}>
              <ListItem display={"flex"} alignItems={"center"}>
                <ListIcon display={"flex"} as={CustomLogo} color="green.500" />
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <Link
                  color="#707070"
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
            <br />
            <Wrap
              ml={{
                base: "6%",
                sm: "4%",
                md: "5%",
                lg: "6%",
                xl: "5%",
                "2xl": "5%",
              }}
            >
              <WrapItem
                _hover={{
                  textDecoration: "underline",
                  textDecorationThickness: "14%",
                  textDecorationColor: "#FFEC05",
                  transition: "transform 0.4s ease-in-out",
                  transform: "scale(1.1)",
                }}
              >
                <Avatar as={fbIcon} />
              </WrapItem>
              <WrapItem
                _hover={{
                  textDecoration: "underline",
                  textDecorationThickness: "14%",
                  textDecorationColor: "#FFEC05",
                  transition: "transform 0.4s ease-in-out",
                  transform: "scale(1.1)",
                }}
              >
                <Avatar as={twitterIcon} />
              </WrapItem>
              <WrapItem
                _hover={{
                  textDecoration: "underline",
                  textDecorationThickness: "14%",
                  textDecorationColor: "#FFEC05",
                  transition: "transform 0.4s ease-in-out",
                  transform: "scale(1.1)",
                }}
              >
                <Avatar as={linkedinIcon} />
              </WrapItem>
              <WrapItem
                _hover={{
                  textDecoration: "underline",
                  textDecorationThickness: "14%",
                  textDecorationColor: "#FFEC05",
                  transition: "transform 0.4s ease-in-out",
                  transform: "scale(1.1)",
                }}
              >
                <Avatar as={pinInterest} />
              </WrapItem>
            </Wrap>
          </Box>
          <Box display={"grid"} gap={"4%"} mt="10%">
            <Text fontWeight={"bold"}>Links</Text>
            <br />
            <Link
              fontWeight={"650"}
              color="#707070"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "14%",
                textDecorationColor: "#FFEC05",
                transition: "transform 0.4s ease-in-out",
                transform: "scale(1.1)",
              }}
            >
              Home
            </Link>
            <Link
              fontWeight={"650"}
              color="#707070"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "14%",
                textDecorationColor: "#FFEC05",
                transition: "transform 0.4s ease-in-out",
                transform: "scale(1.1)",
              }}
            >
              Pricing
            </Link>
            <Link
              fontWeight={"650"}
              color="#707070"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "14%",
                textDecorationColor: "#FFEC05",
                transition: "transform 0.4s ease-in-out",
                transform: "scale(1.1)",
              }}
            >
              Download
            </Link>
            <Link
              fontWeight={"650"}
              color="#707070"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "14%",
                textDecorationColor: "#FFEC05",
                transition: "transform 0.4s ease-in-out",
                transform: "scale(1.1)",
              }}
            >
              About
            </Link>
            <Link
              fontWeight={"650"}
              color="#707070"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "14%",
                textDecorationColor: "#FFEC05",
                transition: "transform 0.4s ease-in-out",
                transform: "scale(1.1)",
              }}
            >
              Service
            </Link>
          </Box>
          <Box display={"grid"} gap={"4%"} mt="10%">
            <Text fontWeight={"bold"}>Support</Text>
            <br />
            <Link
              fontWeight={"650"}
              color="#707070"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "14%",
                textDecorationColor: "#FFEC05",
                transition: "transform 0.4s ease-in-out",
                transform: "scale(1.1)",
              }}
            >
              FAQ
            </Link>
            <Link
              fontWeight={"650"}
              color="#707070"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "14%",
                textDecorationColor: "#FFEC05",
                transition: "transform 0.4s ease-in-out",
                transform: "scale(1.1)",
              }}
            >
              How it
            </Link>
            <Link
              fontWeight={"650"}
              color="#707070"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "14%",
                textDecorationColor: "#FFEC05",
                transition: "transform 0.4s ease-in-out",
                transform: "scale(1.1)",
              }}
            >
              Features
            </Link>
            <Link
              fontWeight={"650"}
              color="#707070"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "14%",
                textDecorationColor: "#FFEC05",
                transition: "transform 0.4s ease-in-out",
                transform: "scale(1.1)",
              }}
            >
              Contact
            </Link>
            <Link
              fontWeight={"650"}
              color="#707070"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "14%",
                textDecorationColor: "#FFEC05",
                transition: "transform 0.4s ease-in-out",
                transform: "scale(1.1)",
              }}
            >
              Reporting
            </Link>
          </Box>
          <Box display={"grid"} gap={"4%"} mt="10%">
            <Text fontWeight={"bold"}>Contact Us</Text>
            <Link
              fontWeight={"650"}
              color="#707070"
              mt="10%"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "14%",
                textDecorationColor: "#FFEC05",
                transition: "transform 0.4s ease-in-out",
                transform: "scale(1.1)",
              }}
            >
              +880 12345678
            </Link>
            <Link
              fontWeight={"650"}
              color="#707070"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "14%",
                textDecorationColor: "#FFEC05",
                transition: "transform 0.4s ease-in-out",
                transform: "scale(1.1)",
              }}
            >
              youremail@gmail.com
            </Link>
            <Link
              fontWeight={"650"}
              color="#707070"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "14%",
                textDecorationColor: "#FFEC05",
                transition: "transform 0.4s ease-in-out",
                transform: "scale(1.1)",
              }}
            >
              Pune City
            </Link>
          </Box>
        </SimpleGrid>
        <Box
          w="87%"
          m="auto"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          // border={"2px solid red"}
          h={8}
        >
          <Box>
            <p style={{ fontSize: "80%" }}>
              Copyright & Design By @Learning Exp.
            </p>
          </Box>
          <Box display={"flex"} mr="6%" gap={5}>
            <p style={{ fontSize: "80%" }}>Terms of use</p>
            <p style={{ fontSize: "80%" }}>|</p>
            <p style={{ fontSize: "80%" }}>Privacy Policy</p>
          </Box>
        </Box>
        <br />
      </Box>
    </>
  );
}

export default Footer;
