import React from 'react';
import { Theme, useTheme } from '@pixie-ui/theme';
import styled from '@emotion/styled';
import { Text, TextProps } from './Text';
import { Title, TitleProps } from './Title';
import { Paragraph, ParagraphProps } from './Paragraph';
import { Copyable, CopyableProps } from './Copyable';

export interface TypographyProps {
  /**
   * 排版组件的子元素
   */
  children?: React.ReactNode;
}

interface TypographyType extends React.FC<TypographyProps> {
  Text: React.FC<TextProps>;
  Title: React.FC<TitleProps>;
  Paragraph: React.FC<ParagraphProps>;
  Copyable: React.FC<CopyableProps>;
}

const StyledTypography = styled.div<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;

/**
 * Typography组件 - 用于文本的展示和排版
 */
const Typography: TypographyType = ({ children }) => {
  const theme = useTheme();
  
  return (
    <StyledTypography theme={theme}>
      {children}
    </StyledTypography>
  );
};

// 将子组件附加到Typography上
Typography.Text = Text;
Typography.Title = Title;
Typography.Paragraph = Paragraph;
Typography.Copyable = Copyable;
export { Typography };
export type { TextProps } from './Text';
export type { TitleProps } from './Title';
export type { ParagraphProps } from './Paragraph';
export type { CopyableProps } from './Copyable'; 