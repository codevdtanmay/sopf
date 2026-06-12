import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, GraduationCap, UserCheck, LayoutDashboard, Calendar, FileCheck, CheckCircle, 
  Settings, Database, CreditCard, ChevronRight, UserPlus, Users, MessageCircle, RefreshCw 
} from 'lucide-react';

interface PortalsPreviewProps {
  id?: string;
  onClose: () => void;
  initialType?: 'student' | 'teacher' | 'dashboard' | null;
}

export default function PortalsPreview({ onClose, initialType = 'student' }: PortalsPreviewProps) {
  const [activePortal, setActivePortal] = useState<'student' | 'teacher' | 'dashboard'>(initialType || 'student');
  const [connectedState, setConnectedState] = useState<'connected' | 'mock' | 'syncing'>('connected');
  
  // Mock Data definitions
  const studentMetrics = {
    name: 'Aarav Nair',
    class: 'Class XI-A (Science)',
    attendance: '96.2%',
    nextExam: 'Chemistry Term on June 28',
    hwChecklist: [
      { id: 'hw-1', task: 'Physics Lab: Projectile vector formulas', done: true },
      { id: 'hw-2', task: 'Maths Integration: Theorem sheet exercise 3', done: false },
      { id: 'hw-3', task: 'Computer Science: Python loop iteration arrays', done: false }
    ]
  };

  const [hwList, setHwList] = useState(studentMetrics.hwChecklist);

  const teacherLogMessages = [
    { id: 'tg-1', sender: 'Mrs. S. Deshmukh (Maths)', subject: 'Class XI Integration Assignment', time: '10:15 AM' },
    { id: 'tg-2', sender: 'Principal Desk Office', subject: 'Staff Meeting Notice July 3rd', time: 'Yesterday' }
  ];

  const [studentGradesClass, setStudentGradesClass] = useState([
    { name: 'Aarav Nair', physics: 92, math: 95 },
    { name: 'Priya Sharma', physics: 88, math: 94 },
    { name: 'Kunal Sen', physics: 85, math: 81 }
  ]);

  const [notifications, setNotifications] = useState(teacherLogMessages);
  const [newHwInput, setNewHwInput] = useState('');

  const addNewHwItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHwInput) return;
    setHwList([...hwList, { id: Date.now().toString(), task: newHwInput, done: false }]);
    setNewHwInput('');
  };

  const toggleHw = (id: string) => {
    setHwList(hwList.map(hw => hw.id === id ? { ...hw, done: !hw.done } : hw));
  };

  const handleGradeChange = (name: string, subject: 'physics' | 'math', score: number) => {
    setStudentGradesClass(studentGradesClass.map(s => {
      if (s.name === name) {
        return { ...s, [subject]: score };
      }
      return s;
    }));
  };

  const [syncStatus, setSyncStatus] = useState('');
  const handleSyncWithCloud = () => {
    setConnectedState('syncing');
    setSyncStatus('Synchronizing mock database...');
    setTimeout(() => {
      setConnectedState('connected');
      setSyncStatus('Successfully synchronized with mock MongoDB!');
      setTimeout(() => {
        setSyncStatus('');
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md" id="portals-overlay">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-5xl h-[84vh] overflow-hidden bg-[#FAF6EE] border border-[#401F3E]/20 rounded-3xl shadow-2xl flex flex-col md:flex-row relative"
        id="portals-preview-box"
      >
        {/* Close Button top-right */}
        <button
          id="close-portals-overlay"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white hover:bg-[#FAF6EE] rounded-full text-[#401F3E]/70 hover:text-[#401F3E] transition-colors cursor-pointer z-20 shadow-xs"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Bar Switcher (Col span 3 equivalent) */}
        <div className="w-full md:w-64 bg-white p-6 flex flex-col justify-between border-r border-[#401F3E]/10 select-none text-left">
          <div>
            {/* Slogan details */}
            <div className="flex items-center gap-2 mb-8">
              <span className="p-1 px-2 rounded bg-[#6B8E23]/10 text-[10px] font-mono font-bold text-[#6B8E23] border border-[#6B8E23]/20">
                PORTALS PREVIEW
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#E6B325]"></span>
            </div>

            <div className="space-y-3">
              <button
                id="portal-switch-student"
                onClick={() => setActivePortal('student')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-xs font-bold transition-all border cursor-pointer ${
                  activePortal === 'student'
                    ? 'bg-[#401F3E] border-[#401F3E] text-white shadow-xs'
                    : 'bg-transparent border-transparent hover:bg-[#FAF6EE] text-[#401F3E]/80 hover:text-[#401F3E]'
                }`}
              >
                <GraduationCap className="w-4.5 h-4.5 text-[#E6B325]" />
                <div className="flex flex-col">
                  <span>Student Portal</span>
                  <span className={`text-[9px] font-mono font-light mt-0.5 ${activePortal === 'student' ? 'text-white/70' : 'text-[#401F3E]/60'}`}>Aarav Nair • Class XI</span>
                </div>
              </button>

              <button
                id="portal-switch-teacher"
                onClick={() => setActivePortal('teacher')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-xs font-bold transition-all border cursor-pointer ${
                  activePortal === 'teacher'
                    ? 'bg-[#401F3E] border-[#401F3E] text-white shadow-xs'
                    : 'bg-transparent border-transparent hover:bg-[#FAF6EE] text-[#401F3E]/80 hover:text-[#401F3E]'
                }`}
              >
                <UserCheck className="w-4.5 h-4.5 text-[#E6B325]" />
                <div className="flex flex-col">
                  <span>Teacher Portal</span>
                  <span className={`text-[9px] font-mono font-light mt-0.5 ${activePortal === 'teacher' ? 'text-white/70' : 'text-[#401F3E]/60'}`}>Faculty Console</span>
                </div>
              </button>

              <button
                id="portal-switch-dashboard"
                onClick={() => setActivePortal('dashboard')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-xs font-bold transition-all border cursor-pointer ${
                  activePortal === 'dashboard'
                    ? 'bg-[#401F3E] border-[#401F3E] text-white shadow-xs'
                    : 'bg-transparent border-transparent hover:bg-[#FAF6EE] text-[#401F3E]/80 hover:text-[#401F3E]'
                }`}
              >
                <LayoutDashboard className="w-4.5 h-4.5 text-[#E6B325]" />
                <div className="flex flex-col">
                  <span>Management Desk</span>
                  <span className={`text-[9px] font-mono font-light mt-0.5 ${activePortal === 'dashboard' ? 'text-white/70' : 'text-[#401F3E]/60'}`}>Admin Ledger & Admission</span>
                </div>
              </button>
            </div>
          </div>

          {/* Sync Trigger button footer */}
          <div className="pt-6 border-t border-[#401F3E]/10">
            {syncStatus && (
              <div className="mb-2 p-2 rounded-lg bg-[#6B8E23]/10 border border-[#6B8E23]/20 text-[9px] font-mono text-[#6B8E23] text-center">
                {syncStatus}
              </div>
            )}
            <button
              id="portal-trigger-cloud-sync"
              onClick={handleSyncWithCloud}
              disabled={connectedState === 'syncing'}
              className="w-full py-2.5 bg-white hover:bg-[#FAF6EE] text-[10px] font-mono font-bold text-[#6B8E23] uppercase tracking-wider rounded-lg border border-[#401F3E]/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-xs"
            >
              <RefreshCw className={`w-3 h-3 ${connectedState === 'syncing' ? 'animate-spin' : ''}`} />
              <span>{connectedState === 'syncing' ? 'Syncing...' : 'Sync Mock DB'}</span>
            </button>
            <p className="text-[9px] text-[#401F3E]/50 align-center text-center mt-2 font-mono">Status: REST Mocking Mode</p>
          </div>
        </div>

        {/* Right content display half (Col span 9 equivalent) */}
        <div className="flex-grow bg-[#FDFBF7] p-6 sm:p-10 overflow-y-auto min-h-0 text-left">
          <AnimatePresence mode="wait">
            {activePortal === 'student' && (
              <motion.div
                key="student-view"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                {/* Header title cards */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#401F3E]/10 pb-4">
                  <div>
                    <h3 className="text-xl font-serif font-black text-[#401F3E]">Student Portal</h3>
                    <p className="text-xs text-[#401F3E]/60">Welcome back, Aarav! Stay updated with current homework marks.</p>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-white border border-[#401F3E]/10 flex items-center gap-2 text-xs">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#6B8E23] animate-pulse"></span>
                    <span className="font-bold text-[#401F3E]">Attendance: {studentMetrics.attendance}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Homework Tasks Form/List */}
                  <div className="p-5 rounded-2xl bg-white border border-[#401F3E]/10 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-[#401F3E]/60 uppercase tracking-widest border-l-2 border-[#E6B325] pl-2">
                      Active Homework Items
                    </h4>

                    <form onSubmit={addNewHwItem} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Add mock task to resolve..."
                        value={newHwInput}
                        onChange={(e) => setNewHwInput(e.target.value)}
                        className="flex-grow pl-3 pr-3 py-2 bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#401F3E] rounded-lg text-xs text-[#401F3E] placeholder-[#401F3E]/30 outline-none transition-colors"
                      />
                      <button
                        type="submit"
                        className="px-3 bg-[#401F3E] hover:bg-[#401F3E]/90 text-white font-mono font-bold rounded-lg text-xs cursor-pointer"
                      >
                        Add
                      </button>
                    </form>

                    <div className="space-y-2">
                      {hwList.map((hw) => (
                        <div
                          key={hw.id}
                          className="flex items-center justify-between p-3 rounded-xl bg-[#FAF6EE] border border-[#401F3E]/5 hover:border-[#401F3E]/10 transition-colors"
                        >
                          <span className={`text-xs ${hw.done ? 'line-through text-[#401F3E]/40' : 'text-[#401F3E]'}`}>
                            {hw.task}
                          </span>
                          <button
                            type="button"
                            onClick={() => toggleHw(hw.id)}
                            className={`px-2 py-1 rounded text-[10px] font-mono font-bold uppercase transition-colors cursor-pointer ${
                              hw.done
                                ? 'bg-[#6B8E23]/10 text-[#6B8E23]'
                                : 'bg-[#E6B325]/10 text-[#E6B325]'
                            }`}
                          >
                            {hw.done ? 'Done' : 'Pending'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Academic Milestones details */}
                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-[#401F3E] text-white space-y-2 shadow-xs">
                      <span className="text-[10px] font-mono font-bold text-[#E6B325] uppercase tracking-wider">Exam Alert</span>
                      <h4 className="text-sm font-bold text-white font-serif">{studentMetrics.nextExam}</h4>
                      <p className="text-xs text-white/80 font-light">Syllabus includes Organic chemistry vectors, benzene chains, computational stoichiometry analysis.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#401F3E]/10 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] font-mono text-[#401F3E]/50 font-bold uppercase">Library Fines</p>
                        <p className="text-lg font-bold text-[#6B8E23]">₹0 (Clear)</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-[#401F3E]/50 font-bold uppercase">Locker Key ID</p>
                        <p className="text-lg font-bold text-[#401F3E]">L-342B</p>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {activePortal === 'teacher' && (
              <motion.div
                key="teacher-view"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#401F3E]/10 pb-4">
                  <div>
                    <h3 className="text-xl font-serif font-black text-[#401F3E]">Faculty Console</h3>
                    <p className="text-xs text-[#401F3E]/60">Class XI-A Math & Physics assessment tracker module.</p>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-white border border-[#401F3E]/10 text-xs text-[#401F3E]">
                    Logged: <span className="font-mono text-[#E6B325] font-bold">Dr. S. K. Deshmukh</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Grade sheet editor */}
                  <div className="p-5 rounded-2xl bg-white border border-[#401F3E]/10 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-[#401F3E]/60 uppercase tracking-widest border-l-2 border-[#E6B325] pl-2">
                      Class Grades Sheet List
                    </h4>
                    
                    <div className="space-y-3">
                      {studentGradesClass.map((student) => (
                        <div key={student.name} className="p-3 bg-[#FAF6EE] rounded-xl border border-[#401F3E]/5 space-y-3">
                          <span className="text-xs font-bold text-[#401F3E]">{student.name}</span>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-2">
                              <span className="text-[#401F3E]/60 font-mono">Physics:</span>
                              <input
                                type="number"
                                value={student.physics}
                                onChange={(e) => handleGradeChange(student.name, 'physics', parseInt(e.target.value) || 0)}
                                className="w-12 bg-white border border-[#401F3E]/20 rounded px-1 text-center text-[#E6B325] font-bold font-mono outline-none focus:border-[#401F3E]"
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[#401F3E]/60 font-mono">Math:</span>
                              <input
                                type="number"
                                value={student.math}
                                onChange={(e) => handleGradeChange(student.name, 'math', parseInt(e.target.value) || 0)}
                                className="w-12 bg-white border border-[#401F3E]/20 rounded px-1 text-center text-[#E6B325] font-bold font-mono outline-none focus:border-[#401F3E]"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Staff Notices Inbox */}
                  <div className="p-5 rounded-2xl bg-white border border-[#401F3E]/10 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-[#401F3E]/60 uppercase tracking-widest border-l-2 border-[#E6B325] pl-2">
                      Staff Bulletin Inbox
                    </h4>

                    <div className="space-y-3">
                      {notifications.map((not) => (
                        <div key={not.id} className="p-3 rounded-xl bg-[#FAF6EE] border border-[#401F3E]/5 space-y-1">
                          <div className="flex items-center justify-between text-[10px] font-mono text-[#401F3E]/50">
                            <span>{not.sender}</span>
                            <span>{not.time}</span>
                          </div>
                          <h4 className="text-xs font-bold text-[#401F3E]">{not.subject}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {activePortal === 'dashboard' && (
              <motion.div
                key="dashboard-view"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#401F3E]/10 pb-4">
                  <div>
                    <h3 className="text-xl font-serif font-black text-[#401F3E]">Management Core Dashboard</h3>
                    <p className="text-xs text-[#401F3E]/60">Total analytical metrics ledger overview of Changotola school assets.</p>
                  </div>
                  <span className="px-3.5 py-1 text-[10px] font-mono font-bold uppercase rounded bg-[#6B8E23]/10 text-[#6B8E23] border border-[#6B8E23]/25">
                    Est. 2011 • Administrative Access
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Fast Stat 1 */}
                  <div className="p-5 bg-white border border-[#401F3E]/10 rounded-2xl">
                    <p className="text-[10px] font-mono text-[#401F3E]/50 uppercase">Interactive Adms Query Rate</p>
                    <p className="text-2xl font-bold font-serif text-[#401F3E] mt-1">42 / Day</p>
                    <p className="text-[9px] text-[#6B8E23] font-mono mt-0.5">↑ 12% Since session release</p>
                  </div>

                  {/* Fast Stat 2 */}
                  <div className="p-5 bg-white border border-[#401F3E]/10 rounded-2xl">
                    <p className="text-[10px] font-mono text-[#401F3E]/50 uppercase">Enrolled Students Ledger</p>
                    <p className="text-2xl font-bold font-serif text-[#401F3E] mt-1">1,248 Pupils</p>
                    <p className="text-[9px] text-[#401F3E]/60 font-mono mt-0.5">CBSE Max Limit: 1,300</p>
                  </div>

                  {/* Fast Stat 3 */}
                  <div className="p-5 bg-white border border-[#401F3E]/10 rounded-2xl">
                    <p className="text-[10px] font-mono text-[#401F3E]/50 uppercase">Operational Ledger Balance</p>
                    <p className="text-2xl font-bold font-serif text-[#401F3E] mt-1">₹89,20,500</p>
                    <p className="text-[9px] text-[#6B8E23] font-mono mt-0.5">All local fee installments verified</p>
                  </div>
                </div>

                {/* API connect instructions mock details */}
                <div className="p-6 bg-white border border-[#401F3E]/10 rounded-3xl space-y-4">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-[#E6B325] animate-pulse" />
                    <h4 className="text-sm font-bold text-[#401F3E] font-serif">REST API & MongoDB Deployment Schema</h4>
                  </div>
                  <p className="text-xs text-[#401F3E]/80 leading-relaxed font-light">
                    This Management Desk has been configured in full modular compliance with our environment blueprints. The schemas are ready to couple with Express.js backend endpoints or MongoDB database routers for real-time querying.
                  </p>
                  <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#401F3E]/10 font-mono text-[10px] text-[#401F3E]/80 leading-relaxed overflow-x-auto text-left">
                    {`// Proposed Express.js connection router to sync data:
app.get('/api/notices', async (req, res) => {
  const notices = await db.collection('notices').find({}).toArray();
  res.json(notices);
});

app.post('/api/registration', async (req, res) => {
  const result = await db.collection('registrations').insertOne(req.body);
  res.json({ success: true, id: result.insertedId });
});`}
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </motion.div>
    </div>
  );
}
