/* @ds-bundle: {"format":4,"namespace":"EditorialPortfolioDesignSystem_efc7a1","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"CTABanner","sourcePath":"components/content/CTABanner.jsx"},{"name":"DeviceFrame","sourcePath":"components/content/DeviceFrame.jsx"},{"name":"Gallery","sourcePath":"components/content/Gallery.jsx"},{"name":"ImageViewer","sourcePath":"components/content/ImageViewer.jsx"},{"name":"Modal","sourcePath":"components/content/Modal.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Timeline","sourcePath":"components/content/Timeline.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"LoadingSkeleton","sourcePath":"components/feedback/LoadingSkeleton.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Container","sourcePath":"components/layout/Container.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"CaseStudyCard","sourcePath":"components/projects/CaseStudyCard.jsx"},{"name":"ProjectCard","sourcePath":"components/projects/ProjectCard.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"dca66ec4fe04","components/content/CTABanner.jsx":"fe601cfb30b9","components/content/DeviceFrame.jsx":"8790a111843e","components/content/Gallery.jsx":"a707b07a3f5e","components/content/ImageViewer.jsx":"280109286cf7","components/content/Modal.jsx":"59ef22f2a009","components/content/Quote.jsx":"6490f8fd1ae0","components/content/StatCard.jsx":"f5bf449fde07","components/content/Testimonial.jsx":"fb6294df537f","components/content/Timeline.jsx":"5a236bbc52a4","components/core/Button.jsx":"c9a002b072cb","components/feedback/Badge.jsx":"b5e68c9027f3","components/feedback/LoadingSkeleton.jsx":"1d89f4504c38","components/feedback/Tag.jsx":"6dc2f1e13006","components/forms/Input.jsx":"ec03845ebe09","components/forms/Textarea.jsx":"ad053dc02178","components/layout/Container.jsx":"6dee1bc0ae63","components/layout/Section.jsx":"edaccc800bc1","components/navigation/Footer.jsx":"8b6620178945","components/navigation/Navbar.jsx":"267fe5127bac","components/projects/CaseStudyCard.jsx":"0fa1e2ec8953","components/projects/ProjectCard.jsx":"f281483144ca","ui_kits/portfolio/CaseStudyPage.jsx":"92976d463ecf","ui_kits/portfolio/HomePage.jsx":"d08006355b73"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EditorialPortfolioDesignSystem_efc7a1 = window.EditorialPortfolioDesignSystem_efc7a1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
const {
  useState
} = React;
function Accordion({
  items = []
}) {
  const [open, setOpen] = useState(0);
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      borderBottom: '1px solid var(--border)'
    }
  }, React.createElement('button', {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '24px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 17,
      fontFamily: 'var(--font-sans)',
      color: 'var(--fg-1)'
    }
  }, it.question, React.createElement('span', {
    style: {
      transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
      transition: 'transform var(--duration-fast) var(--ease-standard)',
      fontSize: 20
    }
  }, '+')), open === i && React.createElement('div', {
    style: {
      fontSize: 15,
      color: 'var(--fg-2)',
      lineHeight: 1.7,
      paddingBottom: 24,
      maxWidth: 640
    }
  }, it.answer))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/CTABanner.jsx
try { (() => {
function CTABanner({
  title,
  buttonLabel = 'Book a Call',
  onClick
}) {
  return React.createElement('div', {
    style: {
      padding: 'var(--space-80)',
      borderRadius: 'var(--radius-card)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 32,
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 48,
      maxWidth: 640,
      lineHeight: 1.15
    }
  }, title), React.createElement('button', {
    onClick,
    style: {
      padding: '14px 32px',
      borderRadius: 'var(--radius-button)',
      border: 'none',
      background: 'var(--white)',
      color: 'var(--fg-1)',
      fontSize: 15,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, buttonLabel));
}
Object.assign(__ds_scope, { CTABanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CTABanner.jsx", error: String((e && e.message) || e) }); }

// components/content/DeviceFrame.jsx
try { (() => {
function DeviceFrame({
  type = 'phone',
  image,
  children
}) {
  const isPhone = type === 'phone';
  return React.createElement('div', {
    style: {
      width: isPhone ? 320 : 720,
      padding: isPhone ? 14 : '28px 14px 14px',
      borderRadius: isPhone ? 40 : 20,
      background: 'var(--rich-black, #0A0A0A)',
      boxShadow: 'var(--shadow-md)',
      boxSizing: 'border-box'
    }
  }, !isPhone && React.createElement('div', {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 14,
      paddingLeft: 4
    }
  }, ['#ff5f57', '#febc2e', '#28c840'].map(c => React.createElement('span', {
    key: c,
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: c
    }
  }))), React.createElement('div', {
    style: {
      width: '100%',
      aspectRatio: isPhone ? '9/19.5' : '16/10',
      borderRadius: isPhone ? 28 : 8,
      overflow: 'hidden',
      background: '#fff',
      backgroundImage: image ? 'url(' + image + ')' : 'none',
      backgroundSize: 'cover'
    }
  }, children));
}
Object.assign(__ds_scope, { DeviceFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DeviceFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/Gallery.jsx
try { (() => {
function Gallery({
  images = []
}) {
  return React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-16)'
    }
  }, images.map((src, i) => React.createElement('div', {
    key: i,
    style: {
      aspectRatio: '1/1',
      borderRadius: 'var(--radius-image)',
      backgroundImage: 'url(' + src + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      background: src ? undefined : 'var(--hover)'
    }
  })));
}
Object.assign(__ds_scope, { Gallery });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Gallery.jsx", error: String((e && e.message) || e) }); }

// components/content/ImageViewer.jsx
try { (() => {
const {
  useState
} = React;
function ImageViewer({
  images = []
}) {
  const [i, setI] = useState(0);
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      width: '100%',
      aspectRatio: '16/9',
      borderRadius: 'var(--radius-image)',
      overflow: 'hidden',
      marginBottom: 16,
      backgroundImage: images[i] ? 'url(' + images[i] + ')' : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      background: images[i] ? undefined : 'var(--hover)',
      transition: 'opacity var(--duration-normal) var(--ease-standard)'
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'center'
    }
  }, images.map((_, idx) => React.createElement('button', {
    key: idx,
    onClick: () => setI(idx),
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: idx === i ? 'var(--fg-1)' : 'var(--border)'
    }
  }))));
}
Object.assign(__ds_scope, { ImageViewer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ImageViewer.jsx", error: String((e && e.message) || e) }); }

// components/content/Modal.jsx
try { (() => {
function Modal({
  open,
  onClose,
  children
}) {
  if (!open) return null;
  return React.createElement('div', {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(17,17,17,0.4)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface)',
      borderRadius: 'var(--radius-dialog)',
      padding: 'var(--space-40)',
      maxWidth: 480,
      width: '90%',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-sans)'
    }
  }, children));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Modal.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function Quote({
  children,
  attribution
}) {
  return React.createElement('figure', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('blockquote', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 40,
      lineHeight: 1.25,
      color: 'var(--fg-1)'
    }
  }, '\u201C' + children + '\u201D'), attribution && React.createElement('figcaption', {
    style: {
      marginTop: 24,
      fontSize: 14,
      color: 'var(--fg-2)'
    }
  }, '\u2014 ' + attribution));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label
}) {
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 56,
      marginBottom: 8
    }
  }, value), React.createElement('div', {
    style: {
      fontSize: 13,
      color: 'var(--fg-2)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function Testimonial({
  quote,
  name,
  role,
  avatar
}) {
  return React.createElement('div', {
    style: {
      padding: 'var(--space-40)',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--border)',
      background: 'var(--surface)',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 20,
      lineHeight: 1.6,
      marginBottom: 28,
      color: 'var(--fg-1)'
    }
  }, '\u201C' + quote + '\u201D'), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement('div', {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: avatar ? 'url(' + avatar + ') center/cover' : 'var(--hover)'
    }
  }), React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, name), React.createElement('div', {
    style: {
      fontSize: 13,
      color: 'var(--fg-2)'
    }
  }, role))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/content/Timeline.jsx
try { (() => {
function Timeline({
  items = []
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)'
    }
  }, items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 24,
      padding: '28px 0',
      borderTop: '1px solid var(--border)'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 13,
      color: 'var(--fg-2)',
      fontFamily: 'var(--font-mono)'
    }
  }, it.date), React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 18,
      fontWeight: 600,
      marginBottom: 6
    }
  }, it.title), React.createElement('div', {
    style: {
      fontSize: 14,
      color: 'var(--fg-2)',
      lineHeight: 1.6
    }
  }, it.description)))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled = false,
  href,
  onClick,
  children
}) {
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: {
      padding: '10px 20px',
      fontSize: 13
    },
    md: {
      padding: '14px 28px',
      fontSize: 15
    },
    lg: {
      padding: '18px 36px',
      fontSize: 16
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    borderRadius: 'var(--radius-button)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'transform var(--duration-fast) var(--ease-standard), background var(--duration-fast) var(--ease-standard), opacity var(--duration-fast)',
    transform: hover && !disabled ? 'translateY(-2px)' : 'translateY(0)',
    opacity: disabled ? 0.4 : 1,
    textDecoration: 'none',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--fg-1)',
      color: 'var(--white)',
      borderColor: 'var(--fg-1)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--fg-1)',
      borderColor: 'var(--fg-1)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--fg-1)',
      borderColor: 'transparent'
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    onClick: disabled ? undefined : onClick,
    disabled,
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, iconPosition === 'left' && icon, children, iconPosition === 'right' && icon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  children
}) {
  const tones = {
    neutral: {
      background: 'var(--hover)',
      color: 'var(--fg-1)'
    },
    success: {
      background: 'rgba(15,157,88,0.1)',
      color: 'var(--success)'
    },
    error: {
      background: 'rgba(217,48,37,0.1)',
      color: 'var(--error)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/LoadingSkeleton.jsx
try { (() => {
function LoadingSkeleton({
  width = '100%',
  height = 20,
  radius = 'var(--radius-12)'
}) {
  return React.createElement('div', {
    style: {
      width,
      height,
      borderRadius: radius,
      background: 'linear-gradient(90deg, var(--hover) 25%, #eeeeee 37%, var(--hover) 63%)',
      backgroundSize: '400% 100%',
      animation: 'ds-shimmer 1.4s ease infinite'
    }
  });
}
Object.assign(__ds_scope, { LoadingSkeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/LoadingSkeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--fg-2)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  name
}) {
  const [focused, setFocused] = useState(false);
  return React.createElement('label', {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)'
    }
  }, label && React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      marginBottom: 8
    }
  }, label), React.createElement('input', {
    name,
    type,
    placeholder,
    value,
    onChange,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '16px 20px',
      fontSize: 16,
      fontFamily: 'var(--font-sans)',
      borderRadius: 'var(--radius-input)',
      border: '1px solid ' + (focused ? 'var(--fg-1)' : 'var(--border)'),
      outline: 'none',
      background: 'var(--surface)',
      color: 'var(--fg-1)',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    },
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
const {
  useState
} = React;
function Textarea({
  label,
  placeholder,
  rows = 5,
  value,
  onChange,
  name
}) {
  const [focused, setFocused] = useState(false);
  return React.createElement('label', {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)'
    }
  }, label && React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      marginBottom: 8
    }
  }, label), React.createElement('textarea', {
    name,
    placeholder,
    rows,
    value,
    onChange,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '16px 20px',
      fontSize: 16,
      fontFamily: 'var(--font-sans)',
      borderRadius: 'var(--radius-input)',
      border: '1px solid ' + (focused ? 'var(--fg-1)' : 'var(--border)'),
      outline: 'none',
      resize: 'vertical',
      background: 'var(--surface)',
      color: 'var(--fg-1)',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    },
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Container.jsx
try { (() => {
function Container({
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      maxWidth: 'var(--max-width)',
      width: 'var(--content-width-pct)',
      margin: '0 auto',
      paddingLeft: 'var(--container-padding-desktop)',
      paddingRight: 'var(--container-padding-desktop)',
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Container });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Container.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function Section({
  children,
  size = 'lg',
  dark = false,
  style
}) {
  return React.createElement('section', {
    style: {
      padding: (size === 'lg' ? 'var(--section-spacing)' : 'var(--section-spacing-sm)') + ' 0',
      background: dark ? 'var(--surface-inverse)' : 'transparent',
      color: dark ? 'var(--text-inverse)' : 'var(--fg-1)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  email = 'hello@studio.com',
  social = ['Instagram', 'LinkedIn', 'X']
}) {
  return React.createElement('footer', {
    style: {
      padding: 'var(--section-spacing-sm) var(--container-padding-desktop)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 56,
      marginBottom: 40
    }
  }, "Let's talk."), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 24
    }
  }, React.createElement('a', {
    href: 'mailto:' + email,
    style: {
      color: 'var(--text-inverse)',
      fontSize: 18,
      borderBottom: '1px solid rgba(255,255,255,0.3)'
    }
  }, email), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 24
    }
  }, social.map(s => React.createElement('a', {
    key: s,
    href: '#',
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 14
    }
  }, s)))), React.createElement('div', {
    style: {
      marginTop: 64,
      fontSize: 12,
      color: 'rgba(255,255,255,0.5)'
    }
  }, '\u00A9 2026 — All rights reserved.'));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;
function Navbar({
  logo = 'Studio',
  links = ['Work', 'About', 'Services', 'Contact'],
  active
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return React.createElement('nav', {
    style: {
      position: 'sticky',
      top: 0,
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--container-padding-desktop)',
      background: scrolled ? 'rgba(250,250,248,0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background var(--duration-normal) var(--ease-standard), border-color var(--duration-normal)',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      zIndex: 10
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 22
    }
  }, logo), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 32
    }
  }, links.map(l => React.createElement('a', {
    key: l,
    href: '#',
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: active === l ? 'var(--fg-1)' : 'var(--fg-2)',
      borderBottom: active === l ? '1px solid var(--fg-1)' : '1px solid transparent',
      paddingBottom: 2
    }
  }, l))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/projects/CaseStudyCard.jsx
try { (() => {
function CaseStudyCard({
  label,
  title,
  role,
  duration,
  result,
  image
}) {
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      width: '100%',
      aspectRatio: '21/9',
      borderRadius: 'var(--radius-image)',
      overflow: 'hidden',
      marginBottom: 24,
      background: image ? 'var(--hover)' : 'var(--fg-1)',
      backgroundImage: image ? 'url(' + image + ')' : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), React.createElement('div', {
    style: {
      fontSize: 12,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      marginBottom: 12
    }
  }, label), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 44,
      marginBottom: 20
    }
  }, title), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 48,
      borderTop: '1px solid var(--border)',
      paddingTop: 20
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 11,
      color: 'var(--fg-2)',
      marginBottom: 4
    }
  }, 'Role'), React.createElement('div', {
    style: {
      fontSize: 14
    }
  }, role)), React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 11,
      color: 'var(--fg-2)',
      marginBottom: 4
    }
  }, 'Duration'), React.createElement('div', {
    style: {
      fontSize: 14
    }
  }, duration)), React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 11,
      color: 'var(--fg-2)',
      marginBottom: 4
    }
  }, 'Result'), React.createElement('div', {
    style: {
      fontSize: 14
    }
  }, result))));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/projects/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// components/projects/ProjectCard.jsx
try { (() => {
const {
  useState
} = React;
function ProjectCard({
  number = '01',
  category = 'Web Design',
  title,
  description,
  tags = [],
  image,
  onClick
}) {
  const [hover, setHover] = useState(false);
  return React.createElement('div', {
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: 'pointer',
      paddingBottom: 'var(--space-40)',
      borderBottom: '1px solid var(--border)'
    }
  }, React.createElement('div', {
    style: {
      width: '100%',
      aspectRatio: '16/10',
      borderRadius: 'var(--radius-image)',
      overflow: 'hidden',
      background: 'var(--hover)',
      marginBottom: 'var(--space-24)'
    }
  }, React.createElement('div', {
    style: {
      width: '100%',
      height: '100%',
      backgroundImage: image ? 'url(' + image + ')' : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transform: hover ? 'scale(1.02)' : 'scale(1)',
      transition: 'transform var(--duration-slow) var(--ease-standard)'
    }
  })), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 12,
      color: 'var(--fg-2)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, number + ' — ' + category), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 32,
      marginBottom: 8
    }
  }, title), React.createElement('div', {
    style: {
      fontSize: 15,
      color: 'var(--fg-2)',
      maxWidth: 420,
      lineHeight: 1.6,
      marginBottom: 12
    }
  }, description), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8
    }
  }, tags.map(t => React.createElement('span', {
    key: t,
    style: {
      fontSize: 12,
      color: 'var(--fg-2)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 12px'
    }
  }, t)))), React.createElement('span', {
    style: {
      fontSize: 22,
      transform: hover ? 'translate(4px,-4px)' : 'translate(0,0)',
      transition: 'transform var(--duration-fast) var(--ease-standard)'
    }
  }, '\u2197')));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/projects/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudyPage.jsx
try { (() => {
const {
  Navbar,
  Footer,
  Section,
  Container,
  CaseStudyCard,
  Gallery,
  StatCard,
  Quote,
  DeviceFrame,
  CTABanner,
  Button
} = window.EditorialPortfolioDesignSystem_efc7a1;
function CaseStudyPage({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    logo: "Ansel Reyes",
    links: ['Work', 'About', 'Services', 'Contact']
  }), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onBack,
    icon: "\\u2190",
    iconPosition: "left"
  }, "Back to Work"))), /*#__PURE__*/React.createElement(Section, {
    size: "sm",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(CaseStudyCard, {
    label: "Case Study \\u2014 01",
    title: "Northwind",
    role: "Lead Product Designer",
    duration: "4 months",
    result: "+38% activation"
  }))), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      marginBottom: 16
    }
  }, "Overview"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.8,
      color: 'var(--fg-1)',
      margin: 0
    }
  }, "Northwind needed a banking app that felt as trustworthy as it was modern \\u2014 replacing a decade-old interface that was actively costing them customers.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      marginBottom: 16
    }
  }, "Challenge"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.8,
      color: 'var(--fg-1)',
      margin: 0
    }
  }, "Users abandoned onboarding at a 46% rate. The product had to feel instantly legible, on any device, to any generation of user."))))), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      marginBottom: 32
    }
  }, "Research & Wireframes"), /*#__PURE__*/React.createElement(Gallery, {
    images: ['', '', '']
  }))), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      marginBottom: 32
    }
  }, "UI Design & Development"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(DeviceFrame, {
    type: "phone"
  }), /*#__PURE__*/React.createElement(DeviceFrame, {
    type: "phone"
  })))), /*#__PURE__*/React.createElement(Section, {
    size: "sm",
    dark: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Quote, {
    attribution: "Jane Cho, CEO"
  }, "Our activation rate nearly doubled in the first quarter after launch."))), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      marginBottom: 32
    }
  }, "Results"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "+38%",
    label: "Activation Rate"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "\\u221246%",
    label: "Drop-off"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "4.8\\u2605",
    label: "App Store Rating"
  })))), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(CTABanner, {
    title: "Have a similar project?",
    buttonLabel: "Book a Call"
  }))), /*#__PURE__*/React.createElement(Footer, {
    email: "hello@anselreyes.com",
    social: ['Instagram', 'LinkedIn', 'X']
  }));
}
window.CaseStudyPage = CaseStudyPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudyPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomePage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Navbar,
  Footer,
  Section,
  Container,
  Button,
  ProjectCard,
  Tag,
  Timeline,
  Accordion,
  StatCard,
  CTABanner,
  Testimonial
} = window.EditorialPortfolioDesignSystem_efc7a1;
const projects = [{
  number: '01',
  category: 'Product Design',
  title: 'Northwind',
  description: 'A banking app rebuilt for clarity and trust.',
  tags: ['iOS', 'Fintech']
}, {
  number: '02',
  category: 'Brand + Web',
  title: 'Ferro Studio',
  description: 'A furniture maker\u2019s new digital home.',
  tags: ['Next.js', 'Commerce']
}, {
  number: '03',
  category: 'AI Product',
  title: 'Cadence',
  description: 'An AI writing assistant for research teams.',
  tags: ['React', 'LLM']
}];
function HomePage({
  onOpenCaseStudy
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    logo: "Ansel Reyes",
    links: ['Work', 'About', 'Services', 'Contact'],
    active: "Work"
  }), /*#__PURE__*/React.createElement(Section, {
    size: "lg"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      marginBottom: 24
    }
  }, "Designing Digital Products"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(48px,7vw,112px)',
      lineHeight: 1.02,
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 32px',
      maxWidth: 980
    }
  }, "Crafting exceptional digital experiences."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--fg-2)',
      maxWidth: 560,
      margin: '0 0 40px'
    }
  }, "Helping startups and enterprises build premium mobile apps, websites, and AI-powered products."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "\\u2192"
  }, "View Projects"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Book a Call")))), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      marginBottom: 16
    }
  }, "Selected Work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 600,
      margin: 0,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Featured Projects"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 64
    }
  }, projects.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.number
  }, p, {
    onClick: onOpenCaseStudy
  })))))), /*#__PURE__*/React.createElement(Section, {
    size: "lg",
    dark: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.6)',
      marginBottom: 24
    }
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 40,
      lineHeight: 1.2,
      margin: 0
    }
  }, "A decade spent making software feel considered.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.8,
      color: 'rgba(255,255,255,0.75)',
      alignSelf: 'end'
    }
  }, "I\\u2019m a product designer and developer working at the intersection of craft and code \\u2014 partnering with founders who care about the details as much as I do.")))), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      marginBottom: 48
    }
  }, "Services"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40
    }
  }, ['Product Design', 'Brand Identity', 'Web Development'].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      borderTop: '1px solid var(--border)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 12
    }
  }, s), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--fg-2)',
      lineHeight: 1.7
    }
  }, "End-to-end craft from first sketch to shipped product.")))))), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      marginBottom: 32
    }
  }, "Process"), /*#__PURE__*/React.createElement(Timeline, {
    items: [{
      date: '01',
      title: 'Discover',
      description: 'Understand the problem, users, and business goals.'
    }, {
      date: '02',
      title: 'Design',
      description: 'Explore, refine, and validate the interface.'
    }, {
      date: '03',
      title: 'Build',
      description: 'Ship a fast, accessible, production-ready product.'
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      marginBottom: 32
    }
  }, "Tech Stack"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, ['Figma', 'React', 'Next.js', 'TypeScript', 'Framer Motion', 'WebGL'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))))), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "Best design partner we\\u2019ve worked with \\u2014 obsessive about the details.",
    name: "Jane Cho",
    role: "CEO, Northwind"
  }))), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      marginBottom: 48
    }
  }, "Experience"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "8+",
    label: "Years in Practice"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "40+",
    label: "Projects Shipped"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "12",
    label: "Awards"
  })))), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      marginBottom: 32
    }
  }, "FAQ"), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: 'How long does a project take?',
      answer: 'Typically 6\u201310 weeks depending on scope.'
    }, {
      question: 'Do you work with startups?',
      answer: 'Yes \u2014 startups and enterprises alike.'
    }, {
      question: 'What\u2019s your availability?',
      answer: 'Booking projects starting next quarter.'
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(CTABanner, {
    title: "Have a project in mind?",
    buttonLabel: "Book a Call"
  }))), /*#__PURE__*/React.createElement(Footer, {
    email: "hello@anselreyes.com",
    social: ['Instagram', 'LinkedIn', 'X']
  }));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomePage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.CTABanner = __ds_scope.CTABanner;

__ds_ns.DeviceFrame = __ds_scope.DeviceFrame;

__ds_ns.Gallery = __ds_scope.Gallery;

__ds_ns.ImageViewer = __ds_scope.ImageViewer;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.LoadingSkeleton = __ds_scope.LoadingSkeleton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Container = __ds_scope.Container;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

})();
