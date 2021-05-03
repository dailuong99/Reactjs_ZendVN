import './button.css';
import classNames from 'classnames';

export default function Button({
  children,
  htmlType,
  type = 'button',
  variant = 'default',
  size = '',
  className,
  loading,
  loadingPos = 'left',
  onClick,
  ...restProps
}) {


  const classes = classNames(className, 'btn', {
    'btn-default': variant === 'default',
    'btn-category': variant === 'category',
    'btn-primary': variant === 'primary',
    'load-more ass1-btn': variant === 'loadmore',
    'btn-size-large': size === 'large'
  })
  const classesloadmore = classNames(className, {
    'load-more ass1-btn': variant === 'loadmore'
  })
  
  if (type === 'loadmore') {
    return (
      <button {...restProps} type={htmlType} className={classesloadmore}>
        { children}
      </button>
    )
  }
  if (type === 'button') {
    return (
      <button {...restProps} type={htmlType} className={classes}>
        { loading && loadingPos === 'left' && <Loading />}
        { children}
        { loading && loadingPos === 'right' && <Loading />}
      </button>
    )
  }

  if (type === 'link') {
    return (
      <a {...restProps} className={classes}>
        { loading && loadingPos === 'left' && <Loading />}
        { children}
        { loading && loadingPos === 'right' && <Loading />}
      </a>
    )
  }
}
