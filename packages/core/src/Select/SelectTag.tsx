import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { Icon } from '../Icon';

export interface SelectTagProps {
  /**
   * 标签的值
   */
  value: string | number;
  /**
   * 标签的内容
   */
  label: ReactNode;
  /**
   * 是否可关闭
   */
  closable?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 自定义渲染标签内容
   */
  tagRender?: (props: { label: ReactNode; value: string | number; closable: boolean; onClose: (e: React.MouseEvent) => void }) => ReactNode;
  /**
   * 最大文本长度
   */
  maxTagTextLength?: number;
  /**
   * 关闭标签的回调
   */
  onClose?: () => void;
  /**
   * 自定义清除图标
   */
  removeIcon?: ReactNode;
}

const TagContainer = styled.div<{
  theme: Theme;
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0 ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.xs} 0;
  padding: 0 ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: all 0.3s;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  user-select: none;
  white-space: nowrap;
`;

const TagContent = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TagCloseIcon = styled.span<{
  theme: Theme;
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing.xs};
  font-size: 10px;
  line-height: 10px;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  
  &:hover {
    color: ${({ theme, $disabled }) => ($disabled ? theme.colors.text.secondary : theme.colors.text.primary)};
  }
`;

export const SelectTag: React.FC<SelectTagProps> = ({
  value,
  label,
  closable = true,
  disabled = false,
  tagRender,
  maxTagTextLength,
  onClose,
  removeIcon,
}) => {
  const theme = useTheme();
  
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;
    onClose?.();
  };
  
  // 处理标签内容显示
  const displayLabel = React.useMemo(() => {
    if (typeof label === 'string' && maxTagTextLength && label.length > maxTagTextLength) {
      return `${label.slice(0, maxTagTextLength)}...`;
    }
    return label;
  }, [label, maxTagTextLength]);
  
  // 使用自定义渲染函数
  if (tagRender) {
    return (
      <>
        {tagRender({
          label: displayLabel,
          value,
          closable: !!closable && !disabled,
          onClose: handleClose,
        })}
      </>
    );
  }
  
  return (
    <TagContainer theme={theme} $disabled={disabled}>
      <TagContent>{displayLabel}</TagContent>
      {closable && !disabled && (
        <TagCloseIcon 
          theme={theme} 
          $disabled={disabled}
          onClick={handleClose}
        >
          {removeIcon || <Icon icon="mdi:close" size="small" />}
        </TagCloseIcon>
      )}
    </TagContainer>
  );
}; 