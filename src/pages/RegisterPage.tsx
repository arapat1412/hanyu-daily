import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Lock, ArrowRight, AtSign } from 'lucide-react';
import { registerAccount, useAuth } from '../lib/auth';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isReady, isConfigured } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      if (password !== confirmPassword)
        throw new Error('Mật khẩu xác nhận chưa khớp.');
      const result = await registerAccount({ username, password });
      if (result.requiresEmailConfirmation)
        throw new Error('Supabase vẫn đang yêu cầu xác nhận email. Quản trị viên cần tắt Confirm email.');
      navigate('/me');
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Không thể tạo tài khoản.');
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
              <img src="/logo.png" alt="Hanyu Daily" className="w-full h-full object-cover scale-[1.38]" />
            </div>
          </Link>
          <h2 className="font-display text-2xl font-bold text-ink">
            Đăng Ký Tài Khoản
          </h2>
          <p className="text-xs text-muted">
            Tạo tài khoản để lưu lại tiến độ học và tích luỹ điểm EXP
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
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
                maxLength={24}
                pattern="[a-z0-9._]+"
                value={username}
                onChange={(event) => setUsername(event.target.value.toLowerCase())}
                placeholder="vd: nguyenvana"
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-line text-xs focus:outline-none focus:border-brand bg-page/40"
              />
            </div>
            <p className="mt-1 text-[10px] text-muted">Chữ thường không dấu, số, dấu chấm hoặc gạch dưới.</p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink-2 mb-1.5">
              Mật khẩu (tối thiểu 6 ký tự)
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="password"
                required
                minLength={6}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-line text-xs focus:outline-none focus:border-brand bg-page/40"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink-2 mb-1.5">
              Nhập lại mật khẩu
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="password"
                required
                minLength={6}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-line text-xs focus:outline-none focus:border-brand bg-page/40"
              />
            </div>
          </div>

          {error && (
            <p role="alert" className="rounded-xl bg-red-50 p-3 text-xs text-red-700">
              {error}
            </p>
          )}

          {!isConfigured && (
            <p role="alert" className="rounded-xl bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
              Website chưa được cấu hình kết nối Supabase. Xem hướng dẫn triển khai trong README.
            </p>
          )}

          <button
            type="submit"
            disabled={busy || !isReady || !isConfigured}
            className="w-full py-3 bg-gold hover:bg-gold-dark text-ink rounded-2xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.01]"
          >
            <span>{busy ? 'Đang tạo tài khoản…' : 'Tạo Tài Khoản Học Ngay'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer switch */}
        <div className="text-center pt-2 border-t border-line text-xs text-ink-2">
          Đã có tài khoản?{' '}
          <Link to="/login" className="font-bold text-brand hover:underline">
            Đăng nhập tại đây
          </Link>
        </div>
      </div>
    </div>
  );
};
