import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 300px;
  text-align: center;
  border: 1px solid #DFE3E8;
  border-radius: 3px;
  padding: 20px 0 40px 0;

  img {
    display: inline-block;
    width: 300px;
  }
`;

/**
 * EmptyData
 */
export default class EmptyData extends React.Component {
  static propTypes = {
    /**
     * 空数据提示文本
     */
    content: T.node
  };

  static defaultProps = {
    content: '暂无数据'
  };

  render() {
    const { content, ...others } = this.props;

    return (
      <Wrapper {...others}>
        <img src='//img.alicdn.com/tfs/TB1vDtMm6ihSKJjy0FeXXbJtpXa-200-120.svg' />
        <div className='empty-text'>{content}</div>
      </Wrapper>
    );
  }
}
