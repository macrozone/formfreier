import { T } from '@panter/manul-i18n';
import React from 'react';
import styled, { css } from 'styled-components';

import MainContentArea from './main_content_area';
import Hr from '/imports/modules/biketoschool/components/hr';

const ComplexPageBase = styled.div`
`;

const HomeBase = styled.div`
  flex-grow: 2;
  position: relative;
`;

const TeaserWrapper = styled.div`
  display: flex;
`;

const ImgTeaser = styled.img`
  display: none;
  @media (min-width: ${p => p.theme.breakPointTablet}px) {
    align-self: flex-end;
    flex-grow: 1
    display: flex;
    height: 300px;
    width: 200px;
  }
`;

const TeaserTextContentArea = styled(MainContentArea) `
  padding: ${p => p.theme.space}px;
  width: 100%;
  @media (min-width: ${p => p.theme.breakPointTablet}px) {
    max-width: 650px;
  }
  height: 100%;
  align-self: flex-end;
  margin-bottom: ${p => (p.theme.spaceXL + p.theme.space)}px;

  h1, h2 {
    margin-bottom: ${p => p.theme.spaceXS}px;
  }

  .paragraph {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    font-family: 'Open Sans';
  }
`;

// const HalfWidthContentArea = styled(MainContentArea)

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: background-color: ${p => p.theme.white};
  @media (min-width: ${p => p.theme.breakPointTablet}px) {
    flex-direction: row;
    background-color: #F6F9E7;
  }

  > div {
    background-color: #F6F9E7;
    flex-basis: 0;
    flex-grow: 1;
    padding: ${p => p.theme.space}px;
    margin-bottom:20px;
  }
  h1, h2 {
    color: ${p => p.theme.primary};
  }
`;

const ComplexPage = ({ page, path, subPath }) => {
  if (!page) {
    return null;
  }
  return (
    <ComplexPageBase
      key={path}
    >
      {page && (
        <HomeBase>
          <TeaserWrapper>
            <TeaserTextContentArea
              contentId={page._id}
              blockPluginProps={{ page, subPath }}
            />
            <ImgTeaser alt="Teaser Image" src="/illu-man.svg" />
          </TeaserWrapper>

          <Hr />
          <ContentWrapper>
            <MainContentArea
              contentId={`${page._id}_left`}
            />
            <MainContentArea
              contentId={`${page._id}_right`}
            />
          </ContentWrapper>
        </HomeBase>
      )}
    </ComplexPageBase>
  );
};


export default ComplexPage;
