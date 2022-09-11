import React, { useState, useEffect } from "react";

import { Box, Button, Image, StyledText } from "./basic";

const countries = [
  { country: "Ghana", img: "../../assets/images/gh.svg", cc: "+233" },
  { country: "Nigeria", img: "../../assets/images/ng.png", cc: "+234" },
];

const CountryPicker = () => {
  const [currentCountry, setCurrentCountry] = useState<{
    country: string;
    img: string;
    cc: string;
  }>();

  const [showCountryList, setShowCountryList] = useState<boolean>(false);

  useEffect(() => {
    setCurrentCountry(countries[0]);
  }, []);

  return (
    <>
      {showCountryList && (
        <Box
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `rgba(0, 0, 0, 0.5)`,
            zIndex: 1,
          }}
        >
          <Box
            style={{
              position: "absolute",
              left: 100,
              top: 100,
              right: 100,
              bottom: 100,
              backgroundColor: "white",
              zIndex: 3,
              flexDirection: "column",
            }}
          >
            <StyledText size={32}>Select Country</StyledText>
            {countries.map((item, index) => {
              const { country, cc } = item;
              return (
                <>
                  <Button
                    style={{
                      justifyContent: "space-between",
                      paddingLeft: 40,
                      paddingRight: 40,
                    }}
                    onClick={() => {
                      setShowCountryList(false);
                      setCurrentCountry(item);
                    }}
                    cursor={"pointer"}
                    key={index}
                  >
                    <StyledText>{country}</StyledText>
                    <StyledText>{cc}</StyledText>
                  </Button>
                  {index < countries.length - 1 && (
                    <Box
                      padding={0}
                      style={{ height: 1, backgroundColor: "#eeeeee" }}
                    />
                  )}
                </>
              );
            })}
          </Box>
        </Box>
      )}
      <Box
        backgroundColor='#EEEEEE'
        alignItems='center'
        justifyContent='center'
        marginTop={5}
        height={33}
        style={{
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          marginRight: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          cursor={"pointer"}
          onClick={() => {
            setShowCountryList(true);
          }}
        >
          <Image
            height={18}
            width={25}
            cursor={"pointer"}
            alt={`${currentCountry?.country} flag`}
            src={currentCountry?.img}
          />
        </Button>
        <Button
          onClick={() => {
            setShowCountryList(true);
          }}
          cursor={"pointer"}
          padding={0}
        >
          <Image
            height={6}
            margin={5}
            cursor={"pointer"}
            alt='caret down'
            src={"../../assets/images/caret_down.svg"}
          />
        </Button>
      </Box>
    </>
  );
};

export default CountryPicker;
