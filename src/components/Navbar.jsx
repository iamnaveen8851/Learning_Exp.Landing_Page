import {
  Flex,
  Box,
  Spacer,
  Link,
  List,
  ListItem,
  ListIcon,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import { useState, useEffect } from "react";
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
  const [scrolling, setScrolling] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Flex
        w={{
          base: "100%", // 0px
          sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
          md: "100%", // ~768px
          lg: "100%", // ~992px
          xl: "100%", // ~1280px
          "2xl": "100%", // ~1536px
        }}
        position={"sticky"}
        top={"0%"}
        zIndex={10}
        className={`nav-container ${scrolling ? "scrolled" : ""}`}
        justify={"space-around"}
        alignItems={"center"}
      >
        <Box
          color={"black"}
          ml={{
            base: "0%", // 0px
            sm: "2%", // ~480px. em is a relative unit and is dependant on the font size.
            md: "3%", // ~768px
            lg: "5%", // ~992px
            xl: "5%", // ~1280px
            "2xl": "5%",
          }}
          w={{
            base: "70%", // 0px
            sm: "75%", // ~480px. em is a relative unit and is dependant on the font size.
            md: "70%", // ~768px
            lg: "60%", // ~992px
            xl: "30%", // ~1280px
            "2xl": "30%",
          }}
        >
          <List spacing={2}>
            <ListItem display={"flex"} alignItems={"center"}>
              <ListIcon as={CustomLogo} color="green.500" />
              &nbsp;&nbsp;
              <Link
                ml={{
                  base: "10%",
                  sm: "1%",
                  md: "1%",
                  lg: "5%",
                  xl: "5%",
                  "2xl": "5%",
                }}
                color={scrolling ? "#YOUR_SCROLLED_COLOR" : "#FFFFFF"}
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
        {/* for large screen  */}
        <Box
          w="50%"
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: " flex",
            xl: "flex",
            "2xl": "flex",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          gap="5%"
          color={scrolling ? "black" : "#FFFFFF"}
          // color={"#FFFFFF"}
          // border={"1px solid red"}
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

        {/* for small screen */}
        <IconButton
          mr="2%"
          pb={5}
          bg="#805AD5"
          color="#FFFFFF"
          fontSize={"28px"}
          w={{
            base: "14%",
            sm: "12%",
            md: "7%",
            lg: "0%",
          }}
          h="55px"
          p={2}
          display={{
            base: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
            "2xl": "none",
          }}
          aria-label="Search database"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
        <Drawer onClose={onClose} isOpen={isOpen} size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px"></DrawerHeader>
            <DrawerBody>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={5}
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
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
}

export default Navbar;
