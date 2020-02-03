import React, { CSSProperties, useEffect } from "react";
import styled from "styled-components";
import { color } from "./common/styles";

type Mode = "dark" | "white";

interface FDDType {
  className?: string;
  style?: CSSProperties;
}

interface FDDPropsType extends FDDType {
  value?: string;
  children?: React.ReactElement<FDDOptionType, "FDDOption">[];
  onChange?: (value: string) => void;
  mode?: Mode;
}

interface FDDOptionType extends FDDType {
  value?: string | number;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

const FDDOptionStyle = {
  Wrapper: styled.div`
    width: 100%;
    cursor: pointer;
    list-style: none;
    padding: 8px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
    line-height: 12px;
    &:hover {
      background-color: ${color.keyColor};
      color: #ffffff;
    }
  `
};

interface FDDSelectStyle {
  mode: Mode;
  isValue: boolean;
}

const FDDSelectStyle = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 4px 4px 4px 8px;
    box-sizing: border-box;
    background: ${({ mode }: FDDSelectStyle) =>
      mode === "white" ? color.white : color.dark};
    color: ${({ mode }: FDDSelectStyle) =>
      mode === "white" ? color.darkGray : color.opacityLightGray};

    transition: color 0.3s;
    &:hover {
      color: ${({ mode }: FDDSelectStyle) =>
        mode === "white" ? color.black : color.white};
      svg {
        rect {
          fill: ${({ mode }: FDDSelectStyle) =>
            mode === "white" ? color.black : color.white};
        }
      }
    }
    font-size: 12px;
    line-height: 12px;
    border: 1px solid
      ${({ mode }: FDDSelectStyle) =>
        mode === "white" ? color.gray : color.dark};
    width: 100%;
    min-width: 40px;
    min-height: 20px;
    position: relative;
  `,
  Svg: styled.svg`
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -7.5px;
    transform: rotate(-45deg);
    rect {
      fill: ${({ mode }: { mode: Mode }) =>
        mode === "white" ? color.darkGray : color.opacityLightGray};
    }
  `
};

interface FDDStyleProps {
  mode: Mode;
  width: number;
  isFocus: boolean;
}

const FDDStyle = {
  Wrapper: styled.div`
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    font-weight: lighter;
  `,
  Ul: styled.ul`
    display: block;
    list-style: none;
    position: absolute;
    left: 0;
    top: 100%;
    margin: 0;
    padding: 0;
    ${({ mode }: FDDStyleProps) => {
      if (mode === "white") {
        return `
                background: white;
                color: rgb(100,100,100);
                &::-webkit-scrollbar{
                  width: 10px;
                  padding: 0 2px;
                  box-sizing: border-box;
                }
                &::-webkit-scrollbar-track {
                  padding: 0 2px;
                  box-sizing: border-box;
                  background-color: rgb(220,220,220);
                }
                &::-webkit-scrollbar-thumb {
                  background-color: rgb(190,190,190);
                  width: 8px;
                  border-radius: 10px;
                  &:hover{
                    background-color: rgb(180,180,180);
                  }
                }
                `;
      } else {
        return `
                background: ${color.dark};
                color: white;
                &::-webkit-scrollbar{
                  width: 10px;
                  padding: 0 2px;
                  box-sizing: border-box;
                }
                &::-webkit-scrollbar-track {
                  background-color: rgb(60,60,60);
                }
                &::-webkit-scrollbar-thumb {
                  background-color: rgb(150,150,150);
                  width: 8px;
                  border-radius: 10px;
                  &:hover{
                    background-color: rgb(180,180,180);
                  }
                }
                `;
      }
    }};
    width: ${({ width }: FDDStyleProps) => `${width}px`};
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 100;
    transition: max-height 0.2s;
    max-height: ${({ isFocus }: FDDStyleProps) => (isFocus ? "100px" : "0")};
    ${({ isFocus }: FDDStyleProps) =>
      isFocus ? "overflow-y: auto" : "overflow: auto"};
  `
};

export const FDDOption: React.FC<FDDOptionType> = props => {
  const { value, children, onChange } = props;
  let valueToString = "";
  if (value) {
    valueToString = value.toString();
  } else {
    if (typeof children === "string") {
      valueToString = children;
    }
  }
  return (
    <FDDOptionStyle.Wrapper onClick={() => onChange && onChange(valueToString)}>
      {children}
    </FDDOptionStyle.Wrapper>
  );
};
FDDOption.displayName = "FDDOption";

const Fdd: React.FC<FDDPropsType> = props => {
  const { children, className, style, onChange, value, mode = "white" } = props;
  const [noOnChangeValue, setNoOnChangeValue] = React.useState<string>("");
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const [selectWidth, setSelectWidth] = React.useState<number>(0);
  const selectEl = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (selectEl && selectEl.current) {
      const { width } = selectEl.current.getBoundingClientRect();
      setSelectWidth(width);
    }
  }, [selectEl]);
  const existOrNoOnChange = (value: string) => {
    if (onChange) {
      onChange(value);
    } else {
      setNoOnChangeValue(value);
    }
    setIsFocus(false);
  };
  const isValue = value !== "" || noOnChangeValue !== "";
  return (
    <FDDStyle.Wrapper tabIndex={1} onBlur={() => setIsFocus(false)}>
      <FDDSelectStyle.Wrapper
        className={className}
        style={style}
        onClick={() => setIsFocus(prevState => !prevState)}
        isValue={isValue}
        mode={mode}
        ref={selectEl}
      >
        {value ? value : noOnChangeValue}
        <FDDSelectStyle.Svg
          width="10px"
          height="10px"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
          mode={mode}
        >
          <rect x="0" y="0" width="1" height="10" />
          <rect x="0" y="9" width="10" height="1" />
        </FDDSelectStyle.Svg>
      </FDDSelectStyle.Wrapper>
      {children && (
        <FDDStyle.Ul width={selectWidth} isFocus={isFocus} mode={mode}>
          {React.Children.map(
            children,
            (
              child: React.ReactElement<FDDOptionType> & {
                type: { displayName?: string };
              }
            ) => {
              // Render when FDDOption is enabled only
              if (child.type.displayName === "FDDOption") {
                return React.cloneElement(child, {
                  onChange: existOrNoOnChange
                });
              } else {
                return null;
              }
            }
          )}
        </FDDStyle.Ul>
      )}
    </FDDStyle.Wrapper>
  );
};

export default Fdd;
