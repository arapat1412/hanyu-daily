import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AtSign, Lock, ArrowRight, Info } from 'lucide-react';
import { loginAccount, useAuth } from '../lib/auth';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isReady, isConfigured } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      await loginAccount(username, password);
      navigate('/me');
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Không thể đăng nhập.');
    } finally {
      setBusy(false);
    }
  };

  if (isReady && user) return <Navigate to="/me" replace />;

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 bg-page">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-line shadow-card space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              <img src="/gautruc-192.webp" alt="Hanyu Daily" width={192} height={192} decoding="async" className="w-full h-full object-cover scale-[1.38]" />
            </div>
          </Link>
          <h2 className="font-display text-2xl font-bold text-ink">
            Đăng Nhập
          </h2>
          <p className="text-xs text-muted">
            Chào mừng bạn quay lại với Hanyu Daily
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2.5 rounded-2xl border border-sky-100 bg-sky-50 p-3 text-[11px] leading-5 text-sky-800">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <p>Hãy đăng nhập bằng <strong>tên đăng nhập</strong> đã tạo, không phải Nickname hiển thị trên bảng xếp hạng.</p>
          </div>
          <div>
            <label className="block text-xs font-semibold text-ink-2 mb-1.5">
              Tên đăng nhập
            </label>
            <div className="relative">
              <AtSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                required
                autoComplete="username"
                minLength={3}
                autoCapitalize="none"
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                placeholder="vd: nguyenvana"
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-line text-xs focus:outline-none focus:border-brand bg-page/40"
              />
            </div>
            <p className="mt-1 text-[10px] text-muted">Tên đăng nhập là chuỗi chữ thường không dấu bạn đã dùng khi đăng ký.</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-ink-2">
                Mật khẩu
              </label>
              <span className="text-[11px] text-muted">Bảo mật bởi Supabase Auth</span>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
              type="password"
              required
              minLength={6}
              autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-line text-xs focus:outline-none focus:border-brand bg-page/40"
              />
            </div>
          </div>

          {!isConfigured && (
            <p role="alert" className="rounded-xl bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
              Website chưa được cấu hình kết nối Supabase. Xem hướng dẫn triển khai trong README.
            </p>
          )}
          {error && (
            <p role="alert" className="rounded-xl bg-red-50 p-3 text-xs text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={busy || !isReady || !isConfigured}
            className="w-full py-3 bg-brand hover:bg-brand-dark text-white rounded-2xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.01]"
          >
            <span>{busy ? 'Đang đăng nhập…' : 'Đăng Nhập'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer switch */}
        <div className="text-center pt-2 border-t border-line text-xs text-ink-2">
          Chưa có tài khoản?{' '}
          <Link to="/register" className="font-bold text-brand hover:underline">
            Đăng ký miễn phí ngay
          </Link>
        </div>
      </div>
    </div>
  );
};
