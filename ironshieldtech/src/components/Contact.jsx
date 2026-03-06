import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // EmailJS Configuration
    // The user should replace these with their own IDs
    const serviceID = 'service_krw70ot'; 
    const templateID = 'template_oowjn9f';
    const publicKey = '9AJdMwa_caarlT-SQ';

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setLoading(false);
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setLoading(false);
        setStatus('error');
      });
  };

  return (
    <section style={{ padding: '10rem 0', background: 'var(--bg-dark)', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="badge">
            PROTOCOL: COMMS_CHANNEL_01
          </span>
          <h2 style={{ fontSize: '3.5rem', marginTop: '1.5rem', fontWeight: 900, letterSpacing: '2px' }}>
            {t('contact.title')}
          </h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: '650px', margin: '1.5rem auto 0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            {t('contact.desc')}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1fr)',
          gap: '4rem',
        }}>
          {/* Tactical Form */}
          <div className="tactical-box glass" style={{ padding: '3.5rem' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--primary-bright)', fontFamily: 'var(--font-mono)', marginBottom: '2.5rem' }}>
              // SECURE_TRANSMISSION_FORM // MK-9
            </div>
            
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <label htmlFor="firstName" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--primary-bright)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                    {t('contact.form.firstName')}
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={t('contact.form.firstName_placeholder')}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-bright)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--primary-bright)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                    {t('contact.form.lastName')}
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={t('contact.form.lastName_placeholder')}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-bright)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--primary-bright)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                  {t('contact.form.email')}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email_placeholder')}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-bright)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem'
                  }}
                />
              </div>

              <div>
                <label htmlFor="subject" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--primary-bright)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                  {t('contact.form.subject')}
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('contact.form.subject_placeholder')}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-bright)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem'
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--primary-bright)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message_placeholder')}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-bright)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: 'var(--primary)',
                  color: '#fff',
                  padding: '1.25rem',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  border: '1px solid var(--primary-bright)',
                  boxShadow: '0 0 30px var(--primary-glow)',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)'
                }}
              >
                {loading ? 'ENCRYPTING & SENDING...' : t('contact.form.submit')}
              </button>

              {status === 'success' && (
                <div style={{ color: 'var(--primary-bright)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textAlign: 'center', marginTop: '1rem' }}>
                  // TRANSMISSION_SUCCESSFUL // DATA_LOGGED
                </div>
              )}
              {status === 'error' && (
                <div style={{ color: 'var(--accent-danger)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textAlign: 'center', marginTop: '1rem' }}>
                  // CONNECTION_FAILURE // RETRY_LATER
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div className="tactical-box" style={{ background: 'rgba(99, 110, 75, 0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-bright)' }}>
                {t('contact.info.title')}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-dim)', fontSize: '1rem', lineHeight: '1.6' }}>
                <p>{t('contact.info.division')}</p>
                <p>{t('contact.info.address1')}</p>
                <p>{t('contact.info.address2')}</p>
              </div>
            </div>

            <div className="tactical-box" style={{ borderLeftColor: 'var(--primary-bright)', borderLeftWidth: '3px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--primary-bright)', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>DIRECT_LINE</div>
                  <p style={{ fontSize: '1.2rem', color: 'var(--text-bright)', fontWeight: 700 }}>+33 (0)1 23 45 67 89</p>
                </div>
                <div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--primary-bright)', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>SECURE_EMAIL</div>
                  <p style={{ fontSize: '1.2rem', color: 'var(--text-bright)', fontWeight: 700 }}>ops@ironshieldtech.com</p>
                </div>
              </div>
            </div>

            <div style={{ paddingLeft: '1.5rem', borderLeft: '1px solid var(--border)' }}>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                {t('contact.info.hours')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
