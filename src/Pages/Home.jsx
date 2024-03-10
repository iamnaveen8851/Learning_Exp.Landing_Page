import {
  Card,
  Image,
  Stack,
  CardBody,
  Icon,
  Text,
  Box,
  Link,
  Heading,
  Button,
  Flex,
  Center,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
} from "@chakra-ui/react";
// import next from "../Pages/videoframe/next.svg";
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// Youtube video i frame react-iframe library
import Iframe from "react-iframe";
<Iframe
  url="https://www.sdrive.app/embed/1ptBQD"
  width="600px"
  height="320px"
  id=""
  className=""
  display="block"
  position="relative"
/>;

const StarIcon = () => {
  return (
    <svg
      id="grade-24px_1_"
      data-name="grade-24px (1)"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <path
        id="Path_11"
        data-name="Path 11"
        d="M22.833,33.813l12.875,7.771L32.292,26.937l11.375-9.854L28.687,15.812,22.833,2,16.979,15.812,2,17.083l11.375,9.854L9.958,41.583Z"
        transform="translate(2.167 2.167)"
        fill="#2e9d0d"
      />
      <path id="Path_12" data-name="Path 12" d="M0,0H50V50H0Z" fill="none" />
    </svg>
  );
};

const ArrowIcon = () => {
  return (
    <svg
      id="arrow_right_alt-24px_1_"
      data-name="arrow_right_alt-24px (1)"
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 70 70"
    >
      <path id="Path_4" data-name="Path 4" d="M0,0H70V70H0Z" fill="none" />
      <path
        id="Path_5"
        data-name="Path 5"
        d="M39.029,16.75H4v5.833H39.029v8.75L50.667,19.667,39.029,8Z"
        transform="translate(7.667 15.333)"
      />
    </svg>
  );
};

const CheckCircle = () => {
  return <FontAwesomeIcon icon={faCheckCircle} color="#1453FF" size="4x" />;
};

const ActiveBatchesIcon = () => {
  return (
    <svg
      id="assignment_turned_in-24px"
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
    >
      <path id="Path_256" data-name="Path 256" d="M0,0H80V80H0Z" fill="none" />
      <path
        id="Path_257"
        data-name="Path 257"
        d="M56.333,7.667H42.4a9.96,9.96,0,0,0-18.8,0H9.667A6.686,6.686,0,0,0,3,14.333V61a6.686,6.686,0,0,0,6.667,6.667H56.333A6.686,6.686,0,0,0,63,61V14.333A6.686,6.686,0,0,0,56.333,7.667ZM33,7.667A3.333,3.333,0,1,1,29.667,11,3.343,3.343,0,0,1,33,7.667ZM26.333,54.333,13,41l4.7-4.7,8.633,8.6L48.3,22.933,53,27.667Z"
        transform="translate(7 2.333)"
        fill="#1453ff"
      />
    </svg>
  );
};

const UserCircle = () => {
  return (
    <svg
      id="supervised_user_circle-24px_2_"
      data-name="supervised_user_circle-24px (2)"
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
    >
      <path
        id="Path_254"
        data-name="Path 254"
        d="M35.323,2A33.333,33.333,0,1,0,68.657,35.333,33.345,33.345,0,0,0,35.323,2ZM47.357,23.133a6.433,6.433,0,1,1-6.433,6.433A6.416,6.416,0,0,1,47.357,23.133Zm-20-5.267a7.867,7.867,0,1,1-7.867,7.867A7.881,7.881,0,0,1,27.357,17.867Zm0,30.433V60.8A26.689,26.689,0,0,1,10.223,44.267c3.5-3.733,12.233-5.633,17.133-5.633a33.908,33.908,0,0,1,6.333.733C28.223,42.267,27.357,46.1,27.357,48.3ZM35.323,62a22.838,22.838,0,0,1-2.633-.133V48.3c0-4.733,9.8-7.1,14.667-7.1,3.567,0,9.733,1.3,12.8,3.833A26.729,26.729,0,0,1,35.323,62Z"
        transform="translate(4.643 4.667)"
        fill="#1453ff"
      />
      <path id="Path_255" data-name="Path 255" d="M0,0H80V80H0Z" fill="none" />
    </svg>
  );
};

// Cards Icon Svg
const flexibleLearningIcon = () => {
  return (
    <svg
      id="Dashboard"
      xmlns="http://www.w3.org/2000/svg"
      width="200.489"
      height="150.824"
      viewBox="0 0 247.489 259.824"
    >
      <g id="Group_1718" data-name="Group 1718" transform="translate(0 32.428)">
        <g id="Group_1695" data-name="Group 1695">
          <g id="Group_1692" data-name="Group 1692">
            <path
              id="Path_38"
              data-name="Path 38"
              d="M274.923,301.975H49.987a8.458,8.458,0,0,1-8.457-8.458V116.324a8.458,8.458,0,0,1,8.457-8.457H274.923a8.458,8.458,0,0,1,8.457,8.457V293.518A8.457,8.457,0,0,1,274.923,301.975Z"
              transform="translate(-38.71 -91.516)"
              fill="#2626bc"
              opacity="0.1"
            />
            <path
              id="Path_39"
              data-name="Path 39"
              d="M274.923,277.975H49.987a8.458,8.458,0,0,1-8.457-8.458V92.324a8.458,8.458,0,0,1,8.457-8.457H274.923a8.458,8.458,0,0,1,8.457,8.457V269.518A8.457,8.457,0,0,1,274.923,277.975Z"
              transform="translate(-38.71 -81.048)"
              fill="#fff"
            />
            <path
              id="Path_40"
              data-name="Path 40"
              d="M49.987,320.232h50.762V180.75H41.53V311.775A8.457,8.457,0,0,0,49.987,320.232Z"
              transform="translate(-38.71 -123.305)"
              fill="#b7c5ff"
            />
            <path
              id="Path_41"
              data-name="Path 41"
              d="M146.56,180.75h106.5V320.231H146.56Z"
              transform="translate(-84.521 -123.305)"
              fill="#d2deff"
            />
            <path
              id="Path_42"
              data-name="Path 42"
              d="M253.219,290.829v76.185H170.9V290.829a2.82,2.82,0,0,1,2.819-2.819H250.4A2.82,2.82,0,0,1,253.219,290.829Z"
              transform="translate(-95.137 -170.089)"
              fill="#02ffb3"
            />
            <path
              id="Path_43"
              data-name="Path 43"
              d="M255.762,368.376l-20.687-20.687a2.819,2.819,0,0,0-3.987,0l-11.93,11.932-5.45-5.45a2.819,2.819,0,0,0-3.986,0L195.444,368.45a2.819,2.819,0,0,0,3.986,3.987l12.285-12.285,12.242,12.241a2.819,2.819,0,0,0,3.986-3.986l-4.8-4.8,9.936-9.939,18.694,18.693a2.819,2.819,0,1,0,3.986-3.986Z"
              transform="translate(-105.482 -195.758)"
              fill="#00d890"
            />
            <path
              id="Path_44"
              data-name="Path 44"
              d="M283.38,138.493V92.324a8.458,8.458,0,0,0-8.457-8.457H49.987a8.458,8.458,0,0,0-8.457,8.457v46.168Z"
              transform="translate(-38.71 -81.048)"
              fill="#02ffb3"
            />
            <path
              id="Path_45"
              data-name="Path 45"
              d="M403.117,83.867H335.44v54.626h76.134V92.324A8.457,8.457,0,0,0,403.117,83.867Z"
              transform="translate(-166.905 -81.048)"
              fill="#97ffd2"
            />
            <path
              id="Path_46"
              data-name="Path 46"
              d="M283.38,122.948V92.324a8.458,8.458,0,0,0-8.457-8.457H49.987a8.458,8.458,0,0,0-8.457,8.457v30.623Z"
              transform="translate(-38.71 -81.048)"
              fill="#6583fe"
            />
            <path
              id="Path_47"
              data-name="Path 47"
              d="M272.742,278.613H47.806a11.289,11.289,0,0,1-11.277-11.277V90.144A11.289,11.289,0,0,1,47.806,78.867H272.741a11.289,11.289,0,0,1,11.277,11.277V267.337A11.289,11.289,0,0,1,272.742,278.613ZM47.806,84.505a5.645,5.645,0,0,0-5.638,5.638V267.337a5.645,5.645,0,0,0,5.638,5.638H272.741a5.645,5.645,0,0,0,5.638-5.638V90.144a5.645,5.645,0,0,0-5.638-5.638Z"
              transform="translate(-36.529 -78.867)"
              fill="#2626bc"
            />
          </g>
          <g
            id="Group_1694"
            data-name="Group 1694"
            transform="translate(21.534 14.659)"
          >
            <g
              id="Group_1693"
              data-name="Group 1693"
              transform="translate(0 2.819)"
            >
              <circle
                id="Ellipse_44"
                data-name="Ellipse 44"
                cx="6.146"
                cy="6.146"
                r="6.146"
                fill="#ff5ba8"
              />
              <circle
                id="Ellipse_45"
                data-name="Ellipse 45"
                cx="6.146"
                cy="6.146"
                r="6.146"
                transform="translate(19.622)"
                fill="#fff"
              />
              <circle
                id="Ellipse_46"
                data-name="Ellipse 46"
                cx="6.146"
                cy="6.146"
                r="6.146"
                transform="translate(39.243)"
                fill="#02ffb3"
              />
            </g>
            <path
              id="Path_48"
              data-name="Path 48"
              d="M372.889,122.331h-76.77V108.52H372.89a2.82,2.82,0,0,1,2.819,2.819v8.173a2.82,2.82,0,0,1-2.82,2.819Z"
              transform="translate(-171.288 -106.46)"
              fill="#d2deff"
            />
            <path
              id="Path_49"
              data-name="Path 49"
              d="M286.7,107.1a7.644,7.644,0,1,0-2.38,12.418l2.452,2.452a2.819,2.819,0,0,0,3.987-3.987l-2.452-2.452A7.651,7.651,0,0,0,286.7,107.1Zm-6.824,3.987a2.006,2.006,0,1,1,0,2.837A2.008,2.008,0,0,1,279.874,111.089Z"
              transform="translate(-161.489 -104.867)"
              fill="#fff"
            />
          </g>
        </g>
        <g
          id="Group_1699"
          data-name="Group 1699"
          transform="translate(75.764 70.124)"
        >
          <path
            id="Path_50"
            data-name="Path 50"
            d="M191.941,227.1H173.722a2.819,2.819,0,0,1-2.819-2.819V206.057a2.819,2.819,0,0,1,2.819-2.819h18.219a2.819,2.819,0,0,1,2.819,2.819v18.219A2.819,2.819,0,0,1,191.941,227.1Z"
            transform="translate(-170.903 -203.238)"
            fill="#ff7eb8"
          />
          <g
            id="Group_1698"
            data-name="Group 1698"
            transform="translate(0 5.638)"
          >
            <path
              id="Path_51"
              data-name="Path 51"
              d="M273.442,213.238h-46.9a2.819,2.819,0,1,0,0,5.638h46.9a2.819,2.819,0,0,0,0-5.638Z"
              transform="translate(-193.941 -213.238)"
              fill="#ff7eb8"
            />
            <g
              id="Group_1696"
              data-name="Group 1696"
              transform="translate(29.782 11.552)"
            >
              <path
                id="Path_52"
                data-name="Path 52"
                d="M273.44,233.726h-46.9a2.819,2.819,0,1,0,0,5.638h46.9a2.819,2.819,0,1,0,0-5.638Z"
                transform="translate(-223.723 -233.726)"
                fill="#6583fe"
              />
            </g>
            <g
              id="Group_1697"
              data-name="Group 1697"
              transform="translate(0 23.103)"
            >
              <path
                id="Path_53"
                data-name="Path 53"
                d="M250.4,254.213H173.722a2.819,2.819,0,0,0,0,5.638H250.4a2.819,2.819,0,0,0,0-5.638Z"
                transform="translate(-170.903 -254.213)"
                fill="#6583fe"
              />
            </g>
          </g>
        </g>
        <g
          id="Group_1700"
          data-name="Group 1700"
          transform="translate(178.094 67.697)"
        >
          <path
            id="Path_54"
            data-name="Path 54"
            d="M417.767,208.238H392.856a2.819,2.819,0,0,0,0,5.638h24.911a2.819,2.819,0,0,0,0-5.638Z"
            transform="translate(-368.812 -202.992)"
            fill="#8399fe"
          />
          <circle
            id="Ellipse_47"
            data-name="Ellipse 47"
            cx="8.066"
            cy="8.066"
            r="8.066"
            fill="#ffa8cf"
          />
        </g>
        <g
          id="Group_1701"
          data-name="Group 1701"
          transform="translate(178.094 93.619)"
        >
          <path
            id="Path_55"
            data-name="Path 55"
            d="M417.767,254.213H392.856a2.819,2.819,0,0,0,0,5.638h24.911a2.819,2.819,0,0,0,0-5.638Z"
            transform="translate(-368.812 -248.967)"
            fill="#8399fe"
          />
          <circle
            id="Ellipse_48"
            data-name="Ellipse 48"
            cx="8.066"
            cy="8.066"
            r="8.066"
            fill="#6583fe"
          />
        </g>
        <g
          id="Group_1702"
          data-name="Group 1702"
          transform="translate(178.094 119.542)"
        >
          <path
            id="Path_56"
            data-name="Path 56"
            d="M417.767,300.189H392.856a2.819,2.819,0,0,0,0,5.638h24.911a2.819,2.819,0,0,0,0-5.638Z"
            transform="translate(-368.812 -294.942)"
            fill="#8399fe"
          />
          <circle
            id="Ellipse_49"
            data-name="Ellipse 49"
            cx="8.066"
            cy="8.066"
            r="8.066"
            fill="#02ffb3"
          />
        </g>
        <g
          id="Group_1703"
          data-name="Group 1703"
          transform="translate(178.094 145.464)"
        >
          <path
            id="Path_57"
            data-name="Path 57"
            d="M417.767,346.164H392.856a2.819,2.819,0,0,0,0,5.638h24.911a2.819,2.819,0,0,0,0-5.638Z"
            transform="translate(-368.812 -340.917)"
            fill="#8399fe"
          />
          <circle
            id="Ellipse_50"
            data-name="Ellipse 50"
            cx="8.066"
            cy="8.066"
            r="8.066"
            fill="#02ffb3"
          />
        </g>
        <g
          id="Group_1704"
          data-name="Group 1704"
          transform="translate(178.094 171.387)"
        >
          <path
            id="Path_58"
            data-name="Path 58"
            d="M417.767,392.14H392.856a2.819,2.819,0,0,0,0,5.638h24.911a2.819,2.819,0,0,0,0-5.638Z"
            transform="translate(-368.812 -386.893)"
            fill="#8399fe"
          />
          <circle
            id="Ellipse_51"
            data-name="Ellipse 51"
            cx="8.066"
            cy="8.066"
            r="8.066"
            fill="#ff7eb8"
          />
        </g>
        <g
          id="Group_1705"
          data-name="Group 1705"
          transform="translate(148.389 122.275)"
        >
          <circle
            id="Ellipse_52"
            data-name="Ellipse 52"
            cx="2.82"
            cy="2.82"
            r="2.82"
            fill="#00d890"
          />
        </g>
        <g
          id="Group_1708"
          data-name="Group 1708"
          transform="translate(16.168 75.625)"
        >
          <g id="Group_1706" data-name="Group 1706">
            <path
              id="Path_59"
              data-name="Path 59"
              d="M94.907,218.632H68.023a2.819,2.819,0,0,1,0-5.638H94.907a2.819,2.819,0,0,1,0,5.638Z"
              transform="translate(-65.204 -212.994)"
              fill="#fff"
            />
          </g>
          <g
            id="Group_1707"
            data-name="Group 1707"
            transform="translate(0 10.768)"
          >
            <path
              id="Path_60"
              data-name="Path 60"
              d="M94.907,237.73H68.023a2.819,2.819,0,0,1,0-5.638H94.907a2.819,2.819,0,0,1,0,5.638Z"
              transform="translate(-65.204 -232.092)"
              fill="#fff"
            />
          </g>
        </g>
        <g
          id="Group_1711"
          data-name="Group 1711"
          transform="translate(16.168 105.873)"
        >
          <g id="Group_1709" data-name="Group 1709">
            <path
              id="Path_61"
              data-name="Path 61"
              d="M94.907,272.279H68.023a2.819,2.819,0,1,1,0-5.638H94.907a2.819,2.819,0,1,1,0,5.638Z"
              transform="translate(-65.204 -266.641)"
              fill="#fff"
            />
          </g>
          <g
            id="Group_1710"
            data-name="Group 1710"
            transform="translate(0 10.768)"
          >
            <path
              id="Path_62"
              data-name="Path 62"
              d="M94.907,291.377H68.023a2.819,2.819,0,1,1,0-5.638H94.907a2.819,2.819,0,1,1,0,5.638Z"
              transform="translate(-65.204 -285.739)"
              fill="#fff"
            />
          </g>
        </g>
        <g
          id="Group_1714"
          data-name="Group 1714"
          transform="translate(16.168 136.12)"
        >
          <g id="Group_1712" data-name="Group 1712">
            <path
              id="Path_63"
              data-name="Path 63"
              d="M94.907,325.925H68.023a2.819,2.819,0,1,1,0-5.638H94.907a2.819,2.819,0,1,1,0,5.638Z"
              transform="translate(-65.204 -320.287)"
              fill="#fff"
            />
          </g>
          <g
            id="Group_1713"
            data-name="Group 1713"
            transform="translate(0 10.768)"
          >
            <path
              id="Path_64"
              data-name="Path 64"
              d="M94.907,345.023H68.023a2.819,2.819,0,1,1,0-5.638H94.907a2.819,2.819,0,0,1,0,5.638Z"
              transform="translate(-65.204 -339.385)"
              fill="#fff"
            />
          </g>
        </g>
        <g
          id="Group_1717"
          data-name="Group 1717"
          transform="translate(16.168 166.368)"
        >
          <g id="Group_1715" data-name="Group 1715">
            <path
              id="Path_65"
              data-name="Path 65"
              d="M94.907,379.572H68.023a2.819,2.819,0,1,1,0-5.638H94.907a2.819,2.819,0,0,1,0,5.638Z"
              transform="translate(-65.204 -373.934)"
              fill="#fff"
            />
          </g>
          <g
            id="Group_1716"
            data-name="Group 1716"
            transform="translate(0 10.768)"
          >
            <path
              id="Path_66"
              data-name="Path 66"
              d="M94.907,398.669H68.023a2.819,2.819,0,0,1,0-5.638H94.907a2.819,2.819,0,0,1,0,5.638Z"
              transform="translate(-65.204 -393.031)"
              fill="#fff"
            />
          </g>
        </g>
      </g>
      <path
        id="Path_67"
        data-name="Path 67"
        d="M335.9,56.053A8.058,8.058,0,1,1,343.962,48,8.067,8.067,0,0,1,335.9,56.053Zm0-10.478a2.42,2.42,0,1,0,2.42,2.42A2.423,2.423,0,0,0,335.9,45.575Z"
        transform="translate(-163.592 -29.459)"
        fill="#6583fe"
      />
      <path
        id="Path_68"
        data-name="Path 68"
        d="M284.526,37.47a8.058,8.058,0,1,1,8.058-8.058A8.067,8.067,0,0,1,284.526,37.47Zm0-10.478a2.42,2.42,0,1,0,2.419,2.42A2.423,2.423,0,0,0,284.526,26.992Z"
        transform="translate(-141.183 -21.354)"
        fill="#01eca5"
      />
      <path
        id="Path_69"
        data-name="Path 69"
        d="M104.154,468.216a2.819,2.819,0,0,1-2.819-2.819,3.386,3.386,0,0,0-3.383-3.383,2.819,2.819,0,1,1,0-5.638,3.386,3.386,0,0,0,3.383-3.383,2.819,2.819,0,1,1,5.638,0,3.386,3.386,0,0,0,3.383,3.383,2.819,2.819,0,1,1,0,5.638,3.386,3.386,0,0,0-3.383,3.383A2.819,2.819,0,0,1,104.154,468.216Z"
        transform="translate(-62.09 -208.391)"
        fill="#ff5ba8"
      />
      <path
        id="Path_70"
        data-name="Path 70"
        d="M421.149,468.216a2.819,2.819,0,0,1-2.819-2.819,3.386,3.386,0,0,0-3.383-3.383,2.819,2.819,0,1,1,0-5.638,3.386,3.386,0,0,0,3.383-3.383,2.819,2.819,0,0,1,5.639,0,3.386,3.386,0,0,0,3.383,3.383,2.819,2.819,0,1,1,0,5.638,3.386,3.386,0,0,0-3.383,3.383A2.819,2.819,0,0,1,421.149,468.216Z"
        transform="translate(-200.353 -208.391)"
        fill="#ff5ba8"
      />
      <path
        id="Path_71"
        data-name="Path 71"
        d="M353.742,468.216a2.819,2.819,0,0,1-2.819-2.819,3.386,3.386,0,0,0-3.383-3.383,2.819,2.819,0,0,1,0-5.638,3.386,3.386,0,0,0,3.383-3.383,2.819,2.819,0,1,1,5.638,0,3.386,3.386,0,0,0,3.383,3.383,2.819,2.819,0,1,1,0,5.638,3.386,3.386,0,0,0-3.383,3.383A2.819,2.819,0,0,1,353.742,468.216Z"
        transform="translate(-170.953 -208.391)"
        fill="#01eca5"
      />
    </svg>
  );
};

const smartphoneIcon = () => {
  return (
    <svg
      id="smartphone_1_"
      data-name="smartphone (1)"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="200.645"
      height="150.101"
      viewBox="0 0 233.645 220.101"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.124"
          y1="0.755"
          x2="0.906"
          y2="0.27"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#dcfdee" stop-opacity="0" />
          <stop offset="0.629" stop-color="#d2f3e4" />
        </linearGradient>
      </defs>
      <g id="Group_1681" data-name="Group 1681">
        <path
          id="Path_11"
          data-name="Path 11"
          d="M9.281,67.544C-1.656,85.523-2.809,116.652,5.2,136.111c7.017,17.045,20.976,33.043,39.3,35.047,6.738.737,13.625-.467,20.294.747,22.934,4.176,31.465,32.441,49.289,47.465,12.4,10.456,29.615,14.156,45.713,12.142s31.169-9.292,44.436-18.629c10.476-7.373,20.278-16.438,25.447-28.159,10.835-24.569-1.912-54.076-21.716-72.21-6.168-5.648-13.043-10.63-18.2-17.216s-8.433-15.376-5.978-23.371c1.959-6.378,7.232-11.323,9.23-17.689,2.719-8.663-1.385-18.382-8.124-24.467s-15.656-9.145-24.49-11.244C123.4,9.728,42.3,13.268,9.281,67.544Z"
          transform="translate(0 -14.84)"
          fill="url(#linear-gradient)"
        />
      </g>
      <g
        id="Group_1690"
        data-name="Group 1690"
        transform="translate(19.452 5.77)"
      >
        <g
          id="Group_1689"
          data-name="Group 1689"
          transform="translate(38.397 0)"
        >
          <g id="Group_1685" data-name="Group 1685">
            <path
              id="Path_12"
              data-name="Path 12"
              d="M231.461,257.581h-86a13.69,13.69,0,0,1-13.69-13.69V70.173a13.69,13.69,0,0,1,13.69-13.69h86a13.69,13.69,0,0,1,13.69,13.69V243.891A13.69,13.69,0,0,1,231.461,257.581Z"
              transform="translate(-129.486 -43.249)"
              fill="#2626bc"
              opacity="0.1"
            />
            <path
              id="Path_13"
              data-name="Path 13"
              d="M231.461,233.581h-86a13.69,13.69,0,0,1-13.69-13.69V46.173a13.69,13.69,0,0,1,13.69-13.69h86a13.69,13.69,0,0,1,13.69,13.69V219.891A13.69,13.69,0,0,1,231.461,233.581Z"
              transform="translate(-129.486 -30.201)"
              fill="#6583fe"
            />
            <path
              id="Path_14"
              data-name="Path 14"
              d="M131.77,75.392H245.152V237.328H131.77Z"
              transform="translate(-129.487 -53.529)"
              fill="#02ffb3"
            />
            <path
              id="Path_15"
              data-name="Path 15"
              d="M131.77,75.392H245.152v73.09H131.77Z"
              transform="translate(-129.487 -53.529)"
              fill="#01eca5"
            />
            <path
              id="Path_16"
              data-name="Path 16"
              d="M131.77,75.392H245.152v63.454H131.77Z"
              transform="translate(-129.487 -53.529)"
              fill="#ffc4df"
            />
            <g
              id="Group_1682"
              data-name="Group 1682"
              transform="translate(2.281 50.823)"
            >
              <path
                id="Path_17"
                data-name="Path 17"
                d="M159.48,161.878H134.048a2.282,2.282,0,0,1-2.282-2.282v-18.46a2.282,2.282,0,0,1,2.282-2.282H159.48a2.282,2.282,0,0,1,2.282,2.282V159.6A2.282,2.282,0,0,1,159.48,161.878Z"
                transform="translate(-131.766 -138.855)"
                fill="#ffa8cf"
              />
              <path
                id="Path_18"
                data-name="Path 18"
                d="M342.214,161.878H316.782A2.282,2.282,0,0,1,314.5,159.6v-18.46a2.282,2.282,0,0,1,2.282-2.282h25.433a2.282,2.282,0,0,1,2.282,2.282V159.6A2.282,2.282,0,0,1,342.214,161.878Z"
                transform="translate(-231.112 -138.855)"
                fill="#ffa8cf"
              />
            </g>
            <path
              id="Path_19"
              data-name="Path 19"
              d="M250.061,138.855H216.415a2.282,2.282,0,0,0-2.282,2.282V159.6a2.282,2.282,0,0,0,2.282,2.282h6.227a5.51,5.51,0,0,1,4.915,2.926,6.391,6.391,0,0,0,11.362,0,5.51,5.51,0,0,1,4.915-2.926h6.227a2.282,2.282,0,0,0,2.282-2.282v-18.46A2.283,2.283,0,0,0,250.061,138.855Z"
              transform="translate(-174.265 -88.032)"
              fill="#ffa8cf"
            />
            <g
              id="Group_1683"
              data-name="Group 1683"
              transform="translate(2.281 42.506)"
            >
              <path
                id="Path_20"
                data-name="Path 20"
                d="M159.48,143.653H134.048a2.282,2.282,0,0,1-2.282-2.282V122.912a2.282,2.282,0,0,1,2.282-2.282H159.48a2.282,2.282,0,0,1,2.282,2.282v18.46A2.282,2.282,0,0,1,159.48,143.653Z"
                transform="translate(-131.766 -120.63)"
                fill="#fff"
              />
              <path
                id="Path_21"
                data-name="Path 21"
                d="M342.214,143.653H316.782a2.282,2.282,0,0,1-2.282-2.282V122.912a2.282,2.282,0,0,1,2.282-2.282h25.433a2.282,2.282,0,0,1,2.282,2.282v18.46A2.281,2.281,0,0,1,342.214,143.653Z"
                transform="translate(-231.112 -120.63)"
                fill="#fff"
              />
            </g>
            <path
              id="Path_22"
              data-name="Path 22"
              d="M228.743,233.144h-86a15.99,15.99,0,0,1-15.972-15.972V43.455A15.99,15.99,0,0,1,142.74,27.483h86a15.99,15.99,0,0,1,15.972,15.972V217.172A15.99,15.99,0,0,1,228.743,233.144Zm-86-201.1a11.421,11.421,0,0,0-11.408,11.408V217.172a11.421,11.421,0,0,0,11.408,11.408h86a11.421,11.421,0,0,0,11.408-11.408V43.455a11.421,11.421,0,0,0-11.408-11.408Z"
              transform="translate(-126.768 -27.483)"
              fill="#2626bc"
            />
            <g
              id="Group_1684"
              data-name="Group 1684"
              transform="translate(48.714 10.208)"
            >
              <path
                id="Path_23"
                data-name="Path 23"
                d="M251.755,54.416H235.8a2.282,2.282,0,1,1,0-4.563h15.956a2.282,2.282,0,0,1,0,4.563Z"
                transform="translate(-233.517 -49.853)"
                fill="#b7c5ff"
              />
            </g>
            <circle
              id="Ellipse_42"
              data-name="Ellipse 42"
              cx="2.283"
              cy="2.283"
              r="2.283"
              transform="translate(75.315 10.206)"
              fill="#b7c5ff"
            />
          </g>
          <path
            id="Path_24"
            data-name="Path 24"
            d="M238.87,315.038H173.479a9.127,9.127,0,0,1-9.127-9.127v-60.38a9.127,9.127,0,0,1,9.127-9.127H238.87A9.127,9.127,0,0,1,248,245.531v60.38A9.126,9.126,0,0,1,238.87,315.038Z"
            transform="translate(-147.201 -141.066)"
            fill="#fff"
          />
          <g
            id="Group_1686"
            data-name="Group 1686"
            transform="translate(43.617 79.795)"
          >
            <circle
              id="Ellipse_43"
              data-name="Ellipse 43"
              cx="15.356"
              cy="15.356"
              r="15.356"
              fill="#ff7eb8"
            />
            <path
              id="Path_25"
              data-name="Path 25"
              d="M254.551,228.1a7.582,7.582,0,1,0-13,5.3,7.552,7.552,0,0,0-2.168,5.3v2.236a15.3,15.3,0,0,0,4.563,1.7V238.7a3.019,3.019,0,0,1,6.037,0v3.938a15.3,15.3,0,0,0,4.563-1.7V238.7a7.536,7.536,0,0,0-2.172-5.3A7.555,7.555,0,0,0,254.551,228.1Zm-7.584,3.021a3.019,3.019,0,1,1,3.021-3.021A3.024,3.024,0,0,1,246.967,231.122Z"
              transform="translate(-231.612 -212.225)"
              fill="#fff"
            />
          </g>
          <g
            id="Group_1687"
            data-name="Group 1687"
            transform="translate(27.331 120.841)"
          >
            <path
              id="Path_26"
              data-name="Path 26"
              d="M194.272,292.289h-5.33a2.282,2.282,0,0,0,0,4.563h5.33a2.282,2.282,0,1,0,0-4.563Z"
              transform="translate(-186.66 -292.289)"
              fill="#ff7eb8"
            />
            <path
              id="Path_27"
              data-name="Path 27"
              d="M247.663,312.561H188.942a2.282,2.282,0,0,0,0,4.563h58.721a2.282,2.282,0,1,0,0-4.563Z"
              transform="translate(-186.66 -303.31)"
              fill="#9fb0fe"
            />
          </g>
          <g
            id="Group_1688"
            data-name="Group 1688"
            transform="translate(27.331 144.989)"
          >
            <path
              id="Path_28"
              data-name="Path 28"
              d="M201.117,345.206H188.942a2.282,2.282,0,0,0,0,4.563h12.176a2.282,2.282,0,1,0,0-4.563Z"
              transform="translate(-186.66 -345.206)"
              fill="#ff7eb8"
            />
            <path
              id="Path_29"
              data-name="Path 29"
              d="M247.663,365.478H188.942a2.282,2.282,0,0,0,0,4.563h58.721a2.282,2.282,0,1,0,0-4.563Z"
              transform="translate(-186.66 -356.227)"
              fill="#9fb0fe"
            />
          </g>
          <path
            id="Path_30"
            data-name="Path 30"
            d="M250.061,120.63H216.415a2.282,2.282,0,0,0-2.282,2.282v18.46a2.282,2.282,0,0,0,2.282,2.282h6.227a5.51,5.51,0,0,1,4.915,2.926,6.392,6.392,0,0,0,11.362,0,5.51,5.51,0,0,1,4.915-2.926h6.227a2.282,2.282,0,0,0,2.282-2.282v-18.46A2.282,2.282,0,0,0,250.061,120.63Z"
            transform="translate(-174.265 -78.124)"
            fill="#ff7eb8"
          />
          <path
            id="Path_31"
            data-name="Path 31"
            d="M338.682,93.874h-9.438a2.282,2.282,0,0,0,0,4.563h9.438a2.282,2.282,0,0,0,0-4.563Z"
            transform="translate(-235.607 -63.577)"
            fill="#6583fe"
          />
        </g>
        <path
          id="Path_32"
          data-name="Path 32"
          d="M66.149,392.561a6.522,6.522,0,1,1,6.522-6.522A6.529,6.529,0,0,1,66.149,392.561Zm0-8.48a1.959,1.959,0,1,0,1.959,1.959A1.961,1.961,0,0,0,66.149,384.081Z"
          transform="translate(-51.869 -218.871)"
          fill="#ff5ba8"
        />
        <path
          id="Path_33"
          data-name="Path 33"
          d="M431.092,157.566a2.282,2.282,0,0,1-2.282-2.282,2.741,2.741,0,0,0-2.738-2.738,2.282,2.282,0,0,1,0-4.563,2.741,2.741,0,0,0,2.738-2.738,2.282,2.282,0,1,1,4.563,0,2.741,2.741,0,0,0,2.738,2.738,2.282,2.282,0,0,1,0,4.563,2.741,2.741,0,0,0-2.738,2.738A2.282,2.282,0,0,1,431.092,157.566Z"
          transform="translate(-249.851 -90.265)"
          fill="#01eca5"
        />
        <path
          id="Path_34"
          data-name="Path 34"
          d="M417.091,204.282A2.282,2.282,0,0,1,414.81,202a2.741,2.741,0,0,0-2.738-2.738,2.282,2.282,0,0,1,0-4.563,2.741,2.741,0,0,0,2.738-2.738,2.282,2.282,0,0,1,4.563,0,2.741,2.741,0,0,0,2.738,2.738,2.282,2.282,0,1,1,0,4.563A2.741,2.741,0,0,0,419.373,202,2.282,2.282,0,0,1,417.091,204.282Z"
          transform="translate(-242.24 -115.663)"
          fill="#6583fe"
        />
        <path
          id="Path_35"
          data-name="Path 35"
          d="M49.928,310.16a2.282,2.282,0,0,1-2.282-2.282,2.741,2.741,0,0,0-2.738-2.738,2.282,2.282,0,0,1,0-4.563,2.741,2.741,0,0,0,2.738-2.738,2.282,2.282,0,1,1,4.563,0,2.741,2.741,0,0,0,2.738,2.738,2.282,2.282,0,0,1,0,4.563,2.741,2.741,0,0,0-2.738,2.738A2.282,2.282,0,0,1,49.928,310.16Z"
          transform="translate(-42.627 -173.225)"
          fill="#01eca5"
        />
        <path
          id="Path_36"
          data-name="Path 36"
          d="M79.824,339.809a2.282,2.282,0,0,1-2.282-2.282,2.741,2.741,0,0,0-2.738-2.738,2.282,2.282,0,0,1,0-4.563,2.741,2.741,0,0,0,2.738-2.738,2.282,2.282,0,1,1,4.563,0,2.741,2.741,0,0,0,2.738,2.738,2.282,2.282,0,1,1,0,4.563,2.741,2.741,0,0,0-2.738,2.738A2.282,2.282,0,0,1,79.824,339.809Z"
          transform="translate(-58.88 -189.344)"
          fill="#6583fe"
        />
      </g>
    </svg>
  );
};

const layout = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="200.561"
      height="150.918"
      viewBox="0 0 220.561 219.918"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          y1="0.5"
          x2="1"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#ffdbed" stop-opacity="0" />
          <stop offset="1" stop-color="#ffdbed" />
        </linearGradient>
      </defs>
      <g id="layout" transform="translate(0 0)">
        <g id="Group_1720" data-name="Group 1720">
          <path
            id="Path_72"
            data-name="Path 72"
            d="M194.626,19.363C125.461-22.8,17.786,15.653,5.257,46.049-11.5,86.713,16.706,93.663,21.947,126.982c4.2,26.735-22.048,52.338-7.062,75.939,16.319,25.7,70.418,19.248,90.98,7.085,37.64-22.264,18.657-48.253,36.48-80.685,16.976-30.89,50.076-18.362,69.339-43.074,18.308-23.487,6.165-52.729-17.058-66.885Z"
            transform="translate(0.001 -0.746)"
            fill="url(#linear-gradient)"
          />
        </g>
        <g
          id="Group_1756"
          data-name="Group 1756"
          transform="translate(11.734 8.849)"
        >
          <g
            id="Group_1754"
            data-name="Group 1754"
            transform="translate(4.002 24.804)"
          >
            <g
              id="Group_1724"
              data-name="Group 1724"
              transform="translate(2.154 2.154)"
            >
              <g id="Group_1721" data-name="Group 1721">
                <path
                  id="Path_73"
                  data-name="Path 73"
                  d="M219.848,107.867H47.992a6.462,6.462,0,0,0-6.462,6.462v135.38a6.462,6.462,0,0,0,6.462,6.462h7.363v10.316a4.308,4.308,0,0,0,4.308,4.308h62.713a4.308,4.308,0,0,0,4.308-4.308V256.171h14.473v10.316a4.308,4.308,0,0,0,4.308,4.308h62.713a4.308,4.308,0,0,0,4.308-4.308V256.171h7.363a6.462,6.462,0,0,0,6.462-6.462V114.329A6.462,6.462,0,0,0,219.848,107.867Z"
                  transform="translate(-41.53 -97.528)"
                  fill="#2626bc"
                  opacity="0.1"
                />
                <path
                  id="Path_74"
                  data-name="Path 74"
                  d="M219.848,232.171H47.992a6.462,6.462,0,0,1-6.462-6.462V90.329a6.462,6.462,0,0,1,6.462-6.462H219.848a6.462,6.462,0,0,1,6.462,6.462v135.38A6.461,6.461,0,0,1,219.848,232.171Z"
                  transform="translate(-41.53 -83.867)"
                  fill="#fff"
                />
                <circle
                  id="Ellipse_53"
                  data-name="Ellipse 53"
                  cx="19.077"
                  cy="19.077"
                  r="19.077"
                  transform="translate(73.313 97.95)"
                  fill="#ffdbed"
                />
                <path
                  id="Path_75"
                  data-name="Path 75"
                  d="M226.31,113.726v-23.4a6.462,6.462,0,0,0-6.462-6.462H47.992a6.462,6.462,0,0,0-6.462,6.462v23.4Z"
                  transform="translate(-41.53 -83.867)"
                  fill="#ff7eb8"
                />
              </g>
              <g
                id="Group_1723"
                data-name="Group 1723"
                transform="translate(14.299 9.046)"
              >
                <g
                  id="Group_1722"
                  data-name="Group 1722"
                  transform="translate(0 2.154)"
                >
                  <circle
                    id="Ellipse_54"
                    data-name="Ellipse 54"
                    cx="4.696"
                    cy="4.696"
                    r="4.696"
                    fill="#ff5ba8"
                  />
                  <circle
                    id="Ellipse_55"
                    data-name="Ellipse 55"
                    cx="4.696"
                    cy="4.696"
                    r="4.696"
                    transform="translate(14.992)"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_56"
                    data-name="Ellipse 56"
                    cx="4.696"
                    cy="4.696"
                    r="4.696"
                    transform="translate(29.983)"
                    fill="#02ffb3"
                  />
                </g>
                <path
                  id="Path_76"
                  data-name="Path 76"
                  d="M354.773,119.072H296.119V108.52h58.655a2.154,2.154,0,0,1,2.154,2.154v6.245A2.154,2.154,0,0,1,354.773,119.072Z"
                  transform="translate(-200.745 -106.946)"
                  fill="#ffdbed"
                />
                <path
                  id="Path_77"
                  data-name="Path 77"
                  d="M283.619,106.574a5.84,5.84,0,1,0-1.818,9.488l1.873,1.873a2.154,2.154,0,0,0,3.046-3.046l-1.873-1.873a5.845,5.845,0,0,0-1.228-6.442Zm-5.213,3.046a1.532,1.532,0,1,1,0,2.167A1.534,1.534,0,0,1,278.405,109.62Z"
                  transform="translate(-187.956 -104.866)"
                  fill="#fff"
                />
              </g>
            </g>
            <g
              id="Group_1750"
              data-name="Group 1750"
              transform="translate(15.978 46.134)"
            >
              <g id="Group_1737" data-name="Group 1737">
                <g id="Group_1726" data-name="Group 1726">
                  <path
                    id="Path_78"
                    data-name="Path 78"
                    d="M144.949,190.268V300.6a4.309,4.309,0,0,1-4.308,4.308H77.928A4.309,4.309,0,0,1,73.62,300.6V190.268a4.309,4.309,0,0,1,4.308-4.308h62.713a4.309,4.309,0,0,1,4.308,4.308Z"
                    transform="translate(-73.62 -185.96)"
                    fill="#9fb0fe"
                  />
                  <path
                    id="Path_79"
                    data-name="Path 79"
                    d="M223.558,314.54v35.311a19.085,19.085,0,0,1,0-35.311Z"
                    transform="translate(-152.229 -259.15)"
                    fill="#8399fe"
                  />
                  <path
                    id="Path_80"
                    data-name="Path 80"
                    d="M144.949,381.02v30.611a4.309,4.309,0,0,1-4.308,4.308H77.928a4.309,4.309,0,0,1-4.308-4.308V381.02Z"
                    transform="translate(-73.62 -296.992)"
                    fill="#8399fe"
                  />
                  <g
                    id="Group_1725"
                    data-name="Group 1725"
                    transform="translate(0.001 0.001)"
                  >
                    <path
                      id="Path_81"
                      data-name="Path 81"
                      d="M228.151,381.02v6.673a19.114,19.114,0,0,1-8.361-6.673Z"
                      transform="translate(-156.823 -296.992)"
                      fill="#6583fe"
                    />
                    <path
                      id="Path_82"
                      data-name="Path 82"
                      d="M144.95,199.537H73.622V190.27a4.308,4.308,0,0,1,4.308-4.308h62.713a4.308,4.308,0,0,1,4.308,4.308Z"
                      transform="translate(-73.622 -185.962)"
                      fill="#6583fe"
                    />
                  </g>
                </g>
                <g
                  id="Group_1727"
                  data-name="Group 1727"
                  transform="translate(21.169 27.587)"
                >
                  <circle
                    id="Ellipse_57"
                    data-name="Ellipse 57"
                    cx="14.496"
                    cy="14.496"
                    r="14.496"
                    fill="#02ffb3"
                  />
                  <path
                    id="Path_83"
                    data-name="Path 83"
                    d="M154.113,275.334a7.157,7.157,0,1,0-12.269,5.006,7.129,7.129,0,0,0-2.046,5v2.111a14.442,14.442,0,0,0,4.308,1.607v-3.718a2.85,2.85,0,0,1,5.7,0v3.718a14.442,14.442,0,0,0,4.308-1.607v-2.111a7.114,7.114,0,0,0-2.051-5A7.132,7.132,0,0,0,154.113,275.334Zm-7.16,2.852a2.85,2.85,0,1,1,2.852-2.852A2.854,2.854,0,0,1,146.953,278.186Z"
                    transform="translate(-132.459 -260.348)"
                    fill="#fff"
                  />
                </g>
                <g
                  id="Group_1735"
                  data-name="Group 1735"
                  transform="translate(20.656 18.259)"
                >
                  <g
                    id="Group_1728"
                    data-name="Group 1728"
                    transform="translate(0 46.071)"
                  >
                    <path
                      id="Path_84"
                      data-name="Path 84"
                      d="M149.434,339.6H123.725a2.154,2.154,0,1,1,0-4.308h25.709a2.154,2.154,0,0,1,0,4.308Z"
                      transform="translate(-121.571 -335.293)"
                      fill="#4369fd"
                    />
                  </g>
                  <g
                    id="Group_1729"
                    data-name="Group 1729"
                    transform="translate(0 73.53)"
                  >
                    <path
                      id="Path_85"
                      data-name="Path 85"
                      d="M149.434,403.343H123.725a2.154,2.154,0,1,1,0-4.308h25.709a2.154,2.154,0,1,1,0,4.308Z"
                      transform="translate(-121.571 -399.035)"
                      fill="#fff"
                    />
                  </g>
                  <g
                    id="Group_1730"
                    data-name="Group 1730"
                    transform="translate(0 81.757)"
                  >
                    <path
                      id="Path_86"
                      data-name="Path 86"
                      d="M149.434,422.441H123.725a2.154,2.154,0,1,1,0-4.308h25.709a2.154,2.154,0,0,1,0,4.308Z"
                      transform="translate(-121.571 -418.133)"
                      fill="#fff"
                    />
                  </g>
                  <g
                    id="Group_1731"
                    data-name="Group 1731"
                    transform="translate(0 53.591)"
                  >
                    <path
                      id="Path_87"
                      data-name="Path 87"
                      d="M132.634,357.058h-8.909a2.154,2.154,0,1,1,0-4.308h8.909a2.154,2.154,0,1,1,0,4.308Z"
                      transform="translate(-121.571 -352.75)"
                      fill="#4369fd"
                    />
                  </g>
                  <g
                    id="Group_1734"
                    data-name="Group 1734"
                    transform="translate(33.15)"
                  >
                    <g id="Group_1732" data-name="Group 1732">
                      <path
                        id="Path_88"
                        data-name="Path 88"
                        d="M205.71,232.653h-5.032a2.154,2.154,0,0,1,0-4.308h5.032a2.154,2.154,0,0,1,0,4.308Z"
                        transform="translate(-198.524 -228.345)"
                        fill="#fff"
                      />
                    </g>
                    <g
                      id="Group_1733"
                      data-name="Group 1733"
                      transform="translate(0 6.671)"
                    >
                      <path
                        id="Path_89"
                        data-name="Path 89"
                        d="M205.71,248.139h-5.032a2.154,2.154,0,0,1,0-4.308h5.032a2.154,2.154,0,0,1,0,4.308Z"
                        transform="translate(-198.524 -243.831)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </g>
                <g
                  id="Group_1736"
                  data-name="Group 1736"
                  transform="translate(8.529 18.258)"
                >
                  <circle
                    id="Ellipse_58"
                    data-name="Ellipse 58"
                    cx="2.155"
                    cy="2.155"
                    r="2.155"
                    fill="#fff"
                  />
                </g>
              </g>
              <g
                id="Group_1749"
                data-name="Group 1749"
                transform="translate(85.803)"
              >
                <g id="Group_1738" data-name="Group 1738">
                  <path
                    id="Path_90"
                    data-name="Path 90"
                    d="M344.129,190.268V300.6a4.309,4.309,0,0,1-4.308,4.308H277.108A4.309,4.309,0,0,1,272.8,300.6V190.268a4.309,4.309,0,0,1,4.308-4.308h62.713a4.309,4.309,0,0,1,4.308,4.308Z"
                    transform="translate(-272.8 -185.96)"
                    fill="#97ffd2"
                  />
                  <path
                    id="Path_91"
                    data-name="Path 91"
                    d="M284.638,332.2A19.072,19.072,0,0,1,272.8,349.851V314.54A19.083,19.083,0,0,1,284.638,332.2Z"
                    transform="translate(-272.8 -259.15)"
                    fill="#02ffb3"
                  />
                  <path
                    id="Path_92"
                    data-name="Path 92"
                    d="M344.129,381.02v30.611a4.309,4.309,0,0,1-4.308,4.308H277.108a4.309,4.309,0,0,1-4.308-4.308V381.02Z"
                    transform="translate(-272.8 -296.992)"
                    fill="#01eca5"
                  />
                  <path
                    id="Path_93"
                    data-name="Path 93"
                    d="M281.162,381.02a19.114,19.114,0,0,1-8.362,6.673V381.02Z"
                    transform="translate(-272.8 -296.992)"
                    fill="#00d890"
                  />
                  <path
                    id="Path_94"
                    data-name="Path 94"
                    d="M344.128,199.537H272.8V190.27a4.308,4.308,0,0,1,4.308-4.308H339.82a4.308,4.308,0,0,1,4.308,4.308Z"
                    transform="translate(-272.799 -185.961)"
                    fill="#01eca5"
                  />
                </g>
                <g
                  id="Group_1739"
                  data-name="Group 1739"
                  transform="translate(21.168 27.587)"
                >
                  <circle
                    id="Ellipse_59"
                    data-name="Ellipse 59"
                    cx="14.496"
                    cy="14.496"
                    r="14.496"
                    fill="#ff7eb8"
                  />
                  <path
                    id="Path_95"
                    data-name="Path 95"
                    d="M353.29,275.334a7.157,7.157,0,1,0-12.269,5.006,7.129,7.129,0,0,0-2.046,5v2.111a14.443,14.443,0,0,0,4.308,1.607v-3.718a2.85,2.85,0,0,1,5.7,0v3.718a14.442,14.442,0,0,0,4.308-1.607v-2.111a7.114,7.114,0,0,0-2.051-5,7.132,7.132,0,0,0,2.051-5.006Zm-7.16,2.852a2.85,2.85,0,1,1,2.852-2.852A2.854,2.854,0,0,1,346.13,278.186Z"
                    transform="translate(-331.635 -260.348)"
                    fill="#fff"
                  />
                </g>
                <g
                  id="Group_1747"
                  data-name="Group 1747"
                  transform="translate(20.656 18.259)"
                >
                  <g
                    id="Group_1740"
                    data-name="Group 1740"
                    transform="translate(0 46.071)"
                  >
                    <path
                      id="Path_96"
                      data-name="Path 96"
                      d="M348.611,339.6H322.9a2.154,2.154,0,1,1,0-4.308h25.709a2.154,2.154,0,1,1,0,4.308Z"
                      transform="translate(-320.748 -335.293)"
                      fill="#ff7eb8"
                    />
                  </g>
                  <g
                    id="Group_1741"
                    data-name="Group 1741"
                    transform="translate(0 73.53)"
                  >
                    <path
                      id="Path_97"
                      data-name="Path 97"
                      d="M348.611,403.343H322.9a2.154,2.154,0,1,1,0-4.308h25.709a2.154,2.154,0,1,1,0,4.308Z"
                      transform="translate(-320.748 -399.035)"
                      fill="#fff"
                    />
                  </g>
                  <g
                    id="Group_1742"
                    data-name="Group 1742"
                    transform="translate(0 81.757)"
                  >
                    <path
                      id="Path_98"
                      data-name="Path 98"
                      d="M348.611,422.441H322.9a2.154,2.154,0,1,1,0-4.308h25.709a2.154,2.154,0,1,1,0,4.308Z"
                      transform="translate(-320.748 -418.133)"
                      fill="#fff"
                    />
                  </g>
                  <g
                    id="Group_1743"
                    data-name="Group 1743"
                    transform="translate(0 53.591)"
                  >
                    <path
                      id="Path_99"
                      data-name="Path 99"
                      d="M331.811,357.058H322.9a2.154,2.154,0,1,1,0-4.308h8.909a2.154,2.154,0,1,1,0,4.308Z"
                      transform="translate(-320.748 -352.75)"
                      fill="#ff7eb8"
                    />
                  </g>
                  <g
                    id="Group_1746"
                    data-name="Group 1746"
                    transform="translate(33.15)"
                  >
                    <g id="Group_1744" data-name="Group 1744">
                      <path
                        id="Path_100"
                        data-name="Path 100"
                        d="M404.887,232.653h-5.032a2.154,2.154,0,0,1,0-4.308h5.032a2.154,2.154,0,1,1,0,4.308Z"
                        transform="translate(-397.701 -228.345)"
                        fill="#fff"
                      />
                    </g>
                    <g
                      id="Group_1745"
                      data-name="Group 1745"
                      transform="translate(0 6.671)"
                    >
                      <path
                        id="Path_101"
                        data-name="Path 101"
                        d="M404.887,248.139h-5.032a2.154,2.154,0,0,1,0-4.308h5.032a2.154,2.154,0,1,1,0,4.308Z"
                        transform="translate(-397.701 -243.831)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </g>
                <g
                  id="Group_1748"
                  data-name="Group 1748"
                  transform="translate(8.528 18.258)"
                >
                  <circle
                    id="Ellipse_60"
                    data-name="Ellipse 60"
                    cx="2.155"
                    cy="2.155"
                    r="2.155"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
            <circle
              id="Ellipse_61"
              data-name="Ellipse 61"
              cx="19.077"
              cy="19.077"
              r="19.077"
              transform="translate(75.467 89.765)"
              fill="#ff7eb8"
            />
            <path
              id="Path_102"
              data-name="Path 102"
              d="M217,78.867H45.145a8.625,8.625,0,0,0-8.616,8.616v135.38a8.625,8.625,0,0,0,8.616,8.616h5.209v8.163a6.469,6.469,0,0,0,6.462,6.462h62.713a6.469,6.469,0,0,0,6.462-6.462v-8.163h10.166v8.163a6.469,6.469,0,0,0,6.462,6.462h62.713a6.469,6.469,0,0,0,6.462-6.462v-8.163H217a8.625,8.625,0,0,0,8.616-8.616V87.483A8.625,8.625,0,0,0,217,78.867ZM119.529,241.8H56.816a2.156,2.156,0,0,1-2.154-2.154V129.309a2.156,2.156,0,0,1,2.154-2.154h62.713a2.156,2.156,0,0,1,2.154,2.154v39.365a21.22,21.22,0,0,0,0,38.069v32.9A2.156,2.156,0,0,1,119.529,241.8ZM148,187.709a16.923,16.923,0,1,1-16.923-16.923A16.942,16.942,0,0,1,148,187.709ZM125.99,227.171V208.32a21.162,21.162,0,0,0,10.166,0v18.851Zm81.494,12.471a2.156,2.156,0,0,1-2.154,2.154H142.618a2.156,2.156,0,0,1-2.154-2.154v-32.9a21.22,21.22,0,0,0,0-38.069V129.309a2.156,2.156,0,0,1,2.154-2.154h62.713a2.156,2.156,0,0,1,2.154,2.154Zm13.825-16.779A4.313,4.313,0,0,1,217,227.171h-5.209V129.309a6.469,6.469,0,0,0-6.462-6.462H142.618a6.469,6.469,0,0,0-6.462,6.462V167.1a21.162,21.162,0,0,0-10.166,0V129.309a6.469,6.469,0,0,0-6.462-6.462H56.816a6.469,6.469,0,0,0-6.462,6.462v97.861H45.145a4.313,4.313,0,0,1-4.308-4.308V87.483a4.313,4.313,0,0,1,4.308-4.308H217a4.313,4.313,0,0,1,4.308,4.308v135.38Z"
              transform="translate(-36.529 -78.867)"
              fill="#2626bc"
            />
            <g
              id="Group_1753"
              data-name="Group 1753"
              transform="translate(86.597 97.311)"
            >
              <g id="Group_1751" data-name="Group 1751">
                <path
                  id="Path_103"
                  data-name="Path 103"
                  d="M251.292,314.862H239.706a2.154,2.154,0,0,1-1.523-3.677l5.793-5.793a2.154,2.154,0,0,1,3.046,3.046l-2.116,2.116h6.386a2.154,2.154,0,0,1,0,4.308Z"
                  transform="translate(-237.552 -304.761)"
                  fill="#fff"
                />
              </g>
              <g
                id="Group_1752"
                data-name="Group 1752"
                transform="translate(0 12.961)"
              >
                <path
                  id="Path_104"
                  data-name="Path 104"
                  d="M245.5,344.949a2.154,2.154,0,0,1-1.523-3.677l2.116-2.116h-6.386a2.154,2.154,0,1,1,0-4.308h11.586a2.154,2.154,0,0,1,1.523,3.677l-5.793,5.793a2.148,2.148,0,0,1-1.523.631Z"
                  transform="translate(-237.553 -334.848)"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
          <path
            id="Path_105"
            data-name="Path 105"
            d="M321.214,44.364a2.154,2.154,0,0,1-2.154-2.154,2.588,2.588,0,0,0-2.585-2.585,2.154,2.154,0,1,1,0-4.308,2.588,2.588,0,0,0,2.585-2.585,2.154,2.154,0,1,1,4.308,0,2.587,2.587,0,0,0,2.584,2.585,2.154,2.154,0,1,1,0,4.308,2.587,2.587,0,0,0-2.584,2.585A2.154,2.154,0,0,1,321.214,44.364Z"
            transform="translate(-190.651 -26.576)"
            fill="#01eca5"
          />
          <path
            id="Path_106"
            data-name="Path 106"
            d="M275.512,33.6a6.157,6.157,0,1,1,6.156-6.156A6.163,6.163,0,0,1,275.512,33.6Zm0-8.005a1.849,1.849,0,1,0,1.848,1.849A1.851,1.851,0,0,0,275.512,25.595Z"
            transform="translate(-165.055 -21.287)"
            fill="#6583fe"
          />
          <path
            id="Path_107"
            data-name="Path 107"
            d="M33.394,460.1a6.157,6.157,0,1,1,6.157-6.156A6.163,6.163,0,0,1,33.394,460.1Zm0-8.005a1.849,1.849,0,1,0,1.849,1.849A1.851,1.851,0,0,0,33.394,452.1Z"
            transform="translate(-27.238 -264.06)"
            fill="#ff5ba8"
          />
          <g
            id="Group_1755"
            data-name="Group 1755"
            transform="translate(80.973 4.003)"
          >
            <path
              id="Path_108"
              data-name="Path 108"
              d="M222.1,44.364a2.154,2.154,0,0,1-2.154-2.154,2.587,2.587,0,0,0-2.585-2.585,2.154,2.154,0,0,1,0-4.308,2.587,2.587,0,0,0,2.585-2.585,2.154,2.154,0,0,1,4.308,0,2.587,2.587,0,0,0,2.585,2.585,2.154,2.154,0,1,1,0,4.308,2.587,2.587,0,0,0-2.585,2.585A2.154,2.154,0,0,1,222.1,44.364Z"
              transform="translate(-215.205 -30.579)"
              fill="#01eca5"
            />
            <path
              id="Path_109"
              data-name="Path 109"
              d="M462.364,472.867a2.154,2.154,0,0,1-2.154-2.154,2.587,2.587,0,0,0-2.585-2.585,2.154,2.154,0,1,1,0-4.308,2.587,2.587,0,0,0,2.585-2.585,2.154,2.154,0,1,1,4.308,0,2.587,2.587,0,0,0,2.585,2.585,2.154,2.154,0,1,1,0,4.308,2.587,2.587,0,0,0-2.585,2.585A2.154,2.154,0,0,1,462.364,472.867Z"
              transform="translate(-351.969 -274.491)"
              fill="#01eca5"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
function Home() {
  const iconTextStyle = {
    color: "#1453FF",
    fontSize: "20px",
    fontWeight: "600",
  };

  return (
    <>
      <SimpleGrid
        w="90%"
        // border={"1px solid black"}
        p={10}
        m="auto"
        columns={{
          base: "1",
          sm: "1",
          md: "2",
          lg: "2",
          xl: "2",
          "2xl": "2",
        }}
        spacing={10}
      >
        <Box h="300px">
          <Heading textAlign={"center"} fontSize={32}>
            We Create Learning Experience With Excellent Technology.
          </Heading>
          <br />
          <Text>
            {" "}
            Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And
            Job-Ready Certificate Programs— All Included In Your Subscription
          </Text>
          <br />
          <Button
            href="/contact-us"
            backgroundColor={"#FFEC05"}
            h="48px"
            w={{
              base: "30%",
              sm: "30%",
              md: "30%",
              lg: "30%",
              xl: "30%",
              "2xl": "30%",
            }}
            fontSize={{
              base: "12px",
              sm: "13px",
              md: "14px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
            fontWeight={600}
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
            Book Demo Class
          </Button>
          <Button
            href="/contact-us"
            backgroundColor={"transparent"}
            h="48px"
            w={{
              base: "30%",
              sm: "30%",
              md: "30%",
              lg: "30%",
              xl: "30%",
              "2xl": "30%",
            }}
            fontSize={{
              base: "10px",
              sm: "13px",
              md: "14px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
            // w="23%"
            // fontSize={"16px"}
            fontWeight={600}
            borderRadius={"30px"}
            color={"white"}
            _hover={{
              textDecoration: "underline",
              textDecorationThickness: "14%",
              textDecorationColor: "black",
              transition: "transform 0.1s ease-in-out",
              transform: "scale(1.1)",
            }}
          >
            Expore More
          </Button>
        </Box>
        <Box
          h="300px"
          borderRadius={"20px"}
          border="10px solid #E9D8FD"
          position={"relative"}
          overflow={"hidden"}
        >
          <Iframe
           
            url="https://www.youtube.com/embed/Bm1NtTAtBAA?si=p1dB8jA37gp-aKMb"
            position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{ height: "320px" }}
          />
        </Box>
      </SimpleGrid>

      {/* Card Section */}
      <Center
        w="90%"
        p={5}
        m={"auto"}
        // border={"2px solid red"}
        display={"grid"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={"10%"}
        mt="25%"
      >
        <Box
          w={{
            base: "80%",
            sm: "70%",
            md: "60%",
            lg: "50%",
          }}
          m="auto"
        >
          <Heading textAlign={"center"}>
            We provide various kind of learning modules for you
          </Heading>
        </Box>

        <Box w="100%" m="auto">
          <Text
            color={"#241B1B"}
            fontWeight={"600"}
            fontSize={"16px"}
            textAlign={"center"}
          >
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When Looking At Its Layout. The Point
            Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal
            Distribution Of Letters, As Opposed To Using 'Content Here, Content
            Here', Making It Look Like Readable English. Many Desktop Publishing
            Packages And Web Page Editors Now Use Lorem Ipsum As Their Default
            Model Text, And A Search For 'Lorem Ipsum' Will Uncover Many Web
            Sites Still In Their Infancy. Various Versions Have Evolved Over The
            Years, Sometimes By Accident, Sometimes On Purpose (Injected Humour
            And The Like).
          </Text>
        </Box>
      </Center>
      <br />
      <br />
      <br />
      <br />
      <SimpleGrid
        columns={{
          base: "1",
          sm: "1",
          md: "2",
          lg: "3",
          xl: "3",
          "2xl": "3",
        }}
        w="65%"
        h="300px"
        m="auto"
        spacing={10}
      >
        <Box
          // border={"1px solid black"}
          _hover={{
            backgroundColor: "#FEFCBF",
            transition: "transform 0.1s ease-in-out",
            transform: "scale(1.1)",
          }}
        >
          <Center
            // border={"1px solid black"}
            mt={10}
            // bg="tomato"
            h="100px"
            color="white"
          >
            <Icon as={smartphoneIcon} />
          </Center>
          <Heading
            mt="10%"
            color={"#000000"}
            textAlign={"center"}
            fontSize={25}
          >
            Learn Anything
          </Heading>
          <Text
            mt="4%"
            textAlign={"center"}
            fontSize={14}
            fontWeight={600}
            color={"#6B6969"}
          >
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable
          </Text>
        </Box>
        <Box
          // border={"1px solid black"}
          _hover={{
            backgroundColor: "#FEFCBF",
            transition: "transform 0.1s ease-in-out",
            transform: "scale(1.1)",
          }}
        >
          <Center
            // border={"1px solid black"}
            mt={10}
            // bg="tomato"
            h="100px"
            color="white"
          >
            <Icon as={flexibleLearningIcon} />
          </Center>
          <Heading
            mt="10%"
            color={"#000000"}
            textAlign={"center"}
            fontSize={25}
          >
            Flexible Learning
          </Heading>
          <Text
            mt="4%"
            textAlign={"center"}
            fontSize={14}
            fontWeight={600}
            color={"#6B6969"}
          >
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When
          </Text>
        </Box>
        <Box
          // border={"1px solid black"}
          _hover={{
            backgroundColor: "#FEFCBF",
            transition: "transform 0.1s ease-in-out",
            transform: "scale(1.1)",
          }}
        >
          <Center
            // border={"1px solid black"}
            mt={10}
            // bg="tomato"
            h="100px"
            color="white"
          >
            <Icon as={layout} />
          </Center>
          <Heading
            mt="10%"
            color={"#000000"}
            textAlign={"center"}
            fontSize={25}
          >
            Expert Connect
          </Heading>
          <Text
            mt="4%"
            textAlign={"center"}
            fontSize={14}
            fontWeight={600}
            color={"#6B6969"}
          >
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When
          </Text>
        </Box>
      </SimpleGrid>

      <br />
      <br />
      {/* Video  */}
      <Center
        w="90%"
        p={10}
        m={"auto"}
        // border={"2px solid red"}
        display={"grid"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={"10%"}
        mt={{
          base: "90%",
          sm: "99%",
          md: "35%",
          lg: "5%",
          xl: "4%",
          "2xl": "1%",
        }}
      >
        <Box w="70%" m="auto">
          <Heading textAlign={"center"}>Why Us</Heading>
        </Box>

        <Box w="60%" m="auto">
          <Text
            color={"#241B1B"}
            fontWeight={"600"}
            fontSize={"16px"}
            textAlign={"center"}
          >
            At Learning Exp. We Are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals. Join Us
            Today And Embark On A Journey Of Discovery, Growth, And Success.
          </Text>
        </Box>
      </Center>
      <br />
      <br />
      {/* Video */}
      <SimpleGrid
        w="90%"
        m="auto"
        columns={{
          base: "1",
          sm: "1",
          md: "2",
          lg: "2",
          xl: "2",
          "2xl": "2",
        }}
        spacing={10}
      >
        <Box
        h="300px"
          borderRadius={"20px"}
          border="10px solid #E9D8FD"
          position={"relative"}
          overflow={"hidden"}
          
        >
          <Iframe
            // url="https://www.youtube.com/embed/Bm1NtTAtBAA?si=p1dB8jA37gp-aKMb"
            url="https://www.youtube.com/embed/c6UNV7gJt8Y?si=m5l4C4NaY5x_IyeP"
            position="absolute"
            
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{ height: "320px"  }}
          />
        </Box>

        <Box
          h="auto"
          mt={{
            base: "90%",
            sm: "60%",
            md: "1%",
            lg: "2%",
            xl: "2%",
            "2xl": "2%",
          }}
        >
          <Heading textAlign={"center"} fontSize={32}>
            Crafting Your Dream Career: Building a Path You Love with us
          </Heading>
          <br />
          <Text>
            {" "}
            At Learning Exp. We Are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals. Join Us
            Today And Embark On A Journey Of Discovery, Growth, And Success.
          </Text>
          <br />
          <Text>
            Our Platform Is Designed To Empower Learners Like You To Excel In
            Today’s Dynamic World.
          </Text>
          <br />
          <Button
            href="/contact-us"
            backgroundColor={"#FFEC05"}
            h="48px"
            w="23%"
            fontSize={"16px"}
            fontWeight={600}
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
            Get More
          </Button>
        </Box>
      </SimpleGrid>
      <br />
      <br />
      <br />
      <Center
        w="90%"
        p={5}
        m={"auto"}
        // border={"2px solid red"}
        display={"grid"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={"10%"}
      >
        <Box w="70%" m="auto">
          <Heading textAlign={"center"}>
            We Completed 1200+ Certification Program Successfully & Counting
          </Heading>
        </Box>

        <Box w="60%" m="auto">
          <Text
            color={"#241B1B"}
            fontWeight={"600"}
            fontSize={"16px"}
            textAlign={"center"}
          >
            At Learning Exp. We Are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals. Join Us
            Today And Embark On A Journey Of Discovery, Growth, And Success.
          </Text>
        </Box>
      </Center>
      <br />

      {/* Icons  */}
      <Flex
        // border={"2px solid black"}
        w={{
          base: "90%",
          sm: "100%",
          md: "90%",
          lg: "90%",
          xl: "90%",
          "2xl": "30%",
        }}
        fontSize={{
          base: "10px",
          sm: "13px",
          md: "14px",
          lg: "16px",
          xl: "16px",
          "2xl": "16px",
        }}
        m="auto"
        mt="10%"
      >
        <List
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "90%",
          }}
          display="flex"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          justifyContent={"space-around"}
          alignItems={"center"}
          m="auto"
        >
          <ListItem>
            <ListIcon as={CheckCircle} color="green.500" />
          </ListItem>
          <ListItem>
            <Text style={iconTextStyle}>100+</Text>
            <Text style={{ color: "#1453FF", fontWeight: "550" }}>
              Batch Complete
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={ActiveBatchesIcon} color="green.500" />
          </ListItem>
          <ListItem>
            <Text style={iconTextStyle}>50+</Text>
            <Text style={{ fontWeight: "550" }}>Active Batches</Text>
          </ListItem>
          <ListItem>
            <ListIcon as={UserCircle} color="green.500" />
          </ListItem>
          <ListItem>
            <Text style={iconTextStyle}>10,000+</Text>
            <Text style={{ fontWeight: "550" }}>Student Satisfied</Text>
          </ListItem>
          <ListItem>
            <ListIcon as={UserCircle} color="green.500" />
          </ListItem>
          <ListItem>
            <Text style={iconTextStyle}>10+</Text>
            <Text style={{ fontWeight: "550" }}>Course Modules</Text>
          </ListItem>
        </List>
      </Flex>

      <Flex
        w="90%"
        m="auto"
        mt="5%"
        justifyContent={"space-between"}
        alignItems={"center"}
        // border={"1px solid black"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        <Box w="70%" p={2}>
          <Heading fontSize={35}>Our Students Feedback</Heading>
          <p style={{ color: "#707070", fontSize: "16px" }}>
            At Learning Exp. We Are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals. Join Us
            Today And Embark On A Journey Of Discovery, Growth, And Success.
          </p>
        </Box>
        <Box
          // border="1px solid black"
          textAlign={"right"}
        >
          <Button borderRadius={"none"} w="80%" bg="#F3F3F3">
            Read More
            <Icon as={ArrowIcon} />
          </Button>
        </Box>
      </Flex>
      <br />
      <br />
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        w="90%"
        // border={"1px solid black"}
        m="auto"
        bg="#EBEBF8"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "16rem" }}
          src="src\Pages\images\footer.png"
          alt="Profile-image"
        />

        <Stack>
          <CardBody ml="10%">
            <Box
              display={"flex"}
              gap={4}
              // border={"1px solid black"}
              alignItems={"center"}
              w="60%"
            >
              <Icon as={StarIcon} />
              <Icon as={StarIcon} />
              <Icon as={StarIcon} />
              <Icon as={StarIcon} />
              <Icon as={StarIcon} />
            </Box>

            <Box w="70%" 
            // border={"1px solid black"}
             mt="2%">
              <Text color="#222D39" fontWeight={600}>
                Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
                Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa
                Quae Ab Illo Modi Tem.
              </Text>
              <br />
              <Text color="#000000" fontWeight={700}>
                Riad Isalm
              </Text>
              <Text fontSize={11} fontWeight={700}>
                Product Manager. <Link color={"#333697"}>@Learning.Com</Link>
              </Text>
            </Box>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
}

export default Home;
