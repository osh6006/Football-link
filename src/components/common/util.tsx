export const ArrowFix = (arrowProps: any) => {
  const { carouselState, children, rtl, ...restArrowProps } = arrowProps;
  return <div {...restArrowProps}>{children}</div>;
};
