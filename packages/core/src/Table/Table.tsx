import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';

export interface TableColumn<T> {
  /**
   * 列标识
   */
  key: string;
  /**
   * 列标题
   */
  title: ReactNode;
  /**
   * 列宽度
   */
  width?: string | number;
  /**
   * 自定义渲染函数
   */
  render?: (value: any, record: T, index: number) => ReactNode;
  /**
   * 对齐方式
   */
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T> {
  /**
   * 表格数据
   */
  dataSource: T[];
  /**
   * 表格列配置
   */
  columns: TableColumn<T>[];
  /**
   * 是否显示边框
   * @default true
   */
  bordered?: boolean;
  /**
   * 行高
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 表格是否可以滚动
   */
  scroll?: {
    x?: string | number;
    y?: string | number;
  };
  /**
   * 空数据时显示的内容
   */
  emptyText?: ReactNode;
  /**
   * 行点击事件
   */
  onRowClick?: (record: T, index: number) => void;
  /**
   * 自定义表头行样式
   */
  headerRowClassName?: string;
  /**
   * 自定义表格行样式
   */
  rowClassName?: string | ((record: T, index: number) => string);
  /**
   * 是否显示斑马纹
   * @default false
   */
  striped?: boolean;
}

// 获取行高
const getRowHeight = (size: 'small' | 'medium' | 'large', theme: Theme) => {
  switch (size) {
    case 'small':
      return '36px';
    case 'medium':
      return '48px';
    case 'large':
      return '60px';
    default:
      return '48px';
  }
};

// 获取单元格padding
const getCellPadding = (size: 'small' | 'medium' | 'large', theme: Theme) => {
  switch (size) {
    case 'small':
      return theme.spacing.xs;
    case 'medium':
      return theme.spacing.sm;
    case 'large':
      return theme.spacing.md;
    default:
      return theme.spacing.sm;
  }
};

const TableWrapper = styled.div<{
  theme: Theme;
  $scroll?: { x?: string | number; y?: string | number };
}>`
  position: relative;
  overflow: auto;
  max-width: 100%;
  ${({ $scroll }) => $scroll?.x && `overflow-x: auto;`}
  ${({ $scroll }) => $scroll?.y && `
    overflow-y: auto;
    max-height: ${$scroll.y}px;
  `}
`;

const StyledTable = styled.table<{
  theme: Theme;
  $bordered: boolean;
  $size: 'small' | 'medium' | 'large';
}>`
  width: 100%;
  border-collapse: ${({ $bordered }) => ($bordered ? 'collapse' : 'separate')};
  border-spacing: 0;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  
  ${({ $bordered, theme }) =>
    $bordered &&
    `
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radii.sm};
    overflow: hidden;
  `}
`;

const TableHead = styled.thead<{
  theme: Theme;
}>`
  background-color: ${({ theme }) => theme.colors.surface};
`;

const TableHeaderRow = styled.tr<{
  theme: Theme;
  className?: string;
}>`
  height: ${({ theme }) => getRowHeight('medium', theme)};
  
  &:hover {
    background-color: ${({ theme }) => 'rgba(0, 0, 0, 0.04)'};
  }
  
  ${({ className }) => className && `
    &.${className} {
      // 自定义样式
    }
  `}
`;

const TableHeaderCell = styled.th<{
  theme: Theme;
  $bordered: boolean;
  $size: 'small' | 'medium' | 'large';
  $width?: string | number;
  $align?: 'left' | 'center' | 'right';
}>`
  padding: ${({ theme, $size }) => getCellPadding($size, theme)};
  font-weight: 500;
  text-align: ${({ $align }) => $align || 'left'};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  ${({ $bordered, theme }) =>
    $bordered &&
    `
    border-right: 1px solid ${theme.colors.border};
    
    &:last-of-type {
      border-right: none;
    }
  `}
  
  ${({ $width }) => $width && `width: ${$width};`}
`;

const TableBody = styled.tbody<{
  theme: Theme;
}>`
  background-color: ${({ theme }) => theme.colors.background};
`;

const TableRow = styled.tr<{
  theme: Theme;
  $size: 'small' | 'medium' | 'large';
  $striped: boolean;
  $index: number;
  className?: string;
}>`
  height: ${({ theme, $size }) => getRowHeight($size, theme)};
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${({ theme }) => 'rgba(0, 0, 0, 0.04)'};
  }
  
  ${({ $striped, $index, theme }) =>
    $striped && $index % 2 !== 0 && `
    background-color: ${theme.colors.surface};
  `}
  
  ${({ className }) => className && `
    &.${className} {
      // 自定义样式
    }
  `}
`;

const TableCell = styled.td<{
  theme: Theme;
  $bordered: boolean;
  $size: 'small' | 'medium' | 'large';
  $align?: 'left' | 'center' | 'right';
}>`
  padding: ${({ theme, $size }) => getCellPadding($size, theme)};
  text-align: ${({ $align }) => $align || 'left'};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  ${({ $bordered, theme }) =>
    $bordered &&
    `
    border-right: 1px solid ${theme.colors.border};
    
    &:last-of-type {
      border-right: none;
    }
  `}
`;

const EmptyWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

/**
 * 表格组件
 * @param props 组件属性
 * @returns 表格组件
 */
export const Table = <T extends object>({
  dataSource = [],
  columns = [],
  bordered = true,
  size = 'medium',
  scroll,
  emptyText = '暂无数据',
  onRowClick,
  headerRowClassName,
  rowClassName,
  striped = false,
}: TableProps<T>) => {
  const theme = useTheme();
  
  // 获取行的类名
  const getRowClassName = (record: T, index: number): string => {
    if (!rowClassName) return '';
    if (typeof rowClassName === 'function') {
      return rowClassName(record, index);
    }
    return rowClassName;
  };
  
  // 渲染表头
  const renderHeader = () => (
    <TableHead theme={theme}>
      <TableHeaderRow theme={theme} className={headerRowClassName}>
        {columns.map((column) => (
          <TableHeaderCell
            key={column.key}
            theme={theme}
            $bordered={bordered}
            $size={size}
            $width={column.width}
            $align={column.align}
          >
            {column.title}
          </TableHeaderCell>
        ))}
      </TableHeaderRow>
    </TableHead>
  );
  
  // 渲染单元格
  const renderCell = (record: T, column: TableColumn<T>, index: number) => {
    const value = (record as any)[column.key];
    if (column.render) {
      return column.render(value, record, index);
    }
    return value;
  };
  
  // 渲染表格主体
  const renderBody = () => (
    <TableBody theme={theme}>
      {dataSource.length > 0 ? (
        dataSource.map((record, index) => (
          <TableRow
            key={index}
            theme={theme}
            $size={size}
            $striped={striped}
            $index={index}
            className={getRowClassName(record, index)}
            onClick={onRowClick ? () => onRowClick(record, index) : undefined}
          >
            {columns.map((column) => (
              <TableCell
                key={`${index}-${column.key}`}
                theme={theme}
                $bordered={bordered}
                $size={size}
                $align={column.align}
              >
                {renderCell(record, column, index)}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <tr>
          <td colSpan={columns.length}>
            <EmptyWrapper theme={theme}>{emptyText}</EmptyWrapper>
          </td>
        </tr>
      )}
    </TableBody>
  );
  
  return (
    <TableWrapper theme={theme} $scroll={scroll}>
      <StyledTable theme={theme} $bordered={bordered} $size={size}>
        {renderHeader()}
        {renderBody()}
      </StyledTable>
    </TableWrapper>
  );
}; 