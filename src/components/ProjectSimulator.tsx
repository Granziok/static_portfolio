import React, { useState } from 'react';
import { Project } from '../types';
import { 
  Sliders, 
  Activity, 
  Database, 
  Terminal, 
  Volume2, 
  Coins, 
  Check, 
  AlertTriangle,
  Play,
  RotateCcw,
  Search,
  Server
} from 'lucide-react';

interface ProjectSimulatorProps {
  project: Project;
}

export const ProjectSimulator: React.FC<ProjectSimulatorProps> = ({ project }) => {
  // 1. Simulator for Cardio / YOLOv8 Predictive Model
  if (project.id === 'cardio-vision-predictive') {
    return <CardioSensitivitySimulator />;
  }

  // 2. Simulator for Backend Concesionaria
  if (project.id === 'backend-concesionaria') {
    return <BackendConcesionariaSimulator />;
  }

  // 3. Simulator for Multiplatform Systems
  if (project.id === 'multiplatform-systems') {
    return <SystemsBootSimulator />;
  }

  // 4. Simulator for Audio Digital Scripting
  if (project.id === 'audio-workflow-scripting') {
    return <AudioFormulaSimulator />;
  }

  // 5. Simulator for Server Administration & Economy
  if (project.id === 'server-administration-economy') {
    return <EconomyBalanceSimulator />;
  }

  return null;
};

// ==========================================
// SUB-SIMULATOR 1: Cardio Sensitivity & Thresholds
// ==========================================
function CardioSensitivitySimulator() {
  const [threshold, setThreshold] = useState<number>(0.35); // Lower threshold = higher sensitivity (fewer false negatives)

  // Dataset population representative sample (10,000 evaluated patient window)
  const totalPatients = 10000;
  const actualSick = 1200; // 12% prevalence
  const actualHealthy = totalPatients - actualSick;

  // Sensitivity increases as threshold drops (prioritizing detection of sick patients)
  // At threshold = 0.35: Recall ~ 98.2%, False Negatives very low
  const sensitivity = Math.min(0.998, Math.max(0.70, 1 - Math.pow(threshold, 1.8) * 0.45));
  const truePositives = Math.round(actualSick * sensitivity);
  const falseNegatives = actualSick - truePositives;

  // Specificity decreases as threshold drops
  const specificity = Math.min(0.98, Math.max(0.60, 0.55 + Math.pow(threshold, 0.7) * 0.42));
  const trueNegatives = Math.round(actualHealthy * specificity);
  const falsePositives = actualHealthy - trueNegatives;

  const precision = truePositives / (truePositives + falsePositives || 1);

  return (
    <div className="bg-slate-950 rounded-xl p-4 sm:p-5 border border-slate-800 text-slate-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-rose-400 animate-pulse" />
          <h4 className="text-sm font-bold text-white">
            Simulador de Calibración de Umbral Diagnóstico (Salud Crítica)
          </h4>
        </div>
        <span className="text-[11px] font-mono text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/40">
          Evaluación en 10.000 pacientes
        </span>
      </div>

      <p className="text-xs text-slate-400 mb-4">
        Ajuste el umbral de decisión del modelo predictivo para observar cómo la reducción del threshold incrementa la sensibilidad estadística (Recall) y minimiza drásticamente los <strong>Falsos Negativos</strong> (pacientes con riesgo no detectados).
      </p>

      {/* Slider Control */}
      <div className="bg-slate-900/90 p-4 rounded-lg border border-slate-800 mb-4">
        <div className="flex justify-between items-center text-xs mb-2">
          <span className="text-slate-300 font-medium">Umbral de Inferencia (Decision Threshold):</span>
          <span className="font-mono text-teal-300 font-bold bg-slate-950 px-2.5 py-1 rounded border border-slate-700">
            {threshold.toFixed(2)}
          </span>
        </div>
        
        <input 
          type="range" 
          min="0.10" 
          max="0.80" 
          step="0.02"
          value={threshold}
          onChange={(e) => setThreshold(parseFloat(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
        />

        <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
          <span>0.10 (Máxima Sensibilidad / 0 Falsos Negativos)</span>
          <span>0.80 (Alta Especificidad / Riesgo de FN)</span>
        </div>
      </div>

      {/* Real-time Confusion Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Matrix Grid */}
        <div>
          <div className="text-xs font-semibold text-slate-400 mb-2 font-mono flex items-center justify-between">
            <span>Matriz de Confusión Dinámica</span>
            <span className="text-[11px] text-teal-400 font-normal">Actual vs Predicho</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
            {/* True Positives */}
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50">
              <div className="text-[11px] text-emerald-400 font-medium">Verdaderos Positivos (TP)</div>
              <div className="text-lg font-bold text-white mt-0.5">{truePositives.toLocaleString()}</div>
              <div className="text-[10px] text-emerald-300/80">Pacientes detectados a tiempo</div>
            </div>

            {/* False Negatives - CRITICAL */}
            <div className={`p-3 rounded-lg border transition-colors ${
              falseNegatives < 30 
                ? 'bg-emerald-950/30 border-emerald-800/60' 
                : falseNegatives < 100 
                  ? 'bg-amber-950/40 border-amber-800/60' 
                  : 'bg-rose-950/50 border-rose-800/70'
            }`}>
              <div className="text-[11px] font-bold text-rose-300 flex items-center justify-center gap-1">
                <AlertTriangle className="w-3 h-3 text-rose-400" />
                Falsos Negativos (FN)
              </div>
              <div className="text-lg font-bold text-white mt-0.5">{falseNegatives.toLocaleString()}</div>
              <div className="text-[10px] text-rose-300/90 font-sans">
                {falseNegatives < 30 ? 'Óptimo clínico (muy bajo riesgo)' : 'Riesgo inaceptable en salud'}
              </div>
            </div>

            {/* False Positives */}
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-[11px] text-slate-400">Falsos Positivos (FP)</div>
              <div className="text-lg font-bold text-slate-200 mt-0.5">{falsePositives.toLocaleString()}</div>
              <div className="text-[10px] text-slate-500">Requieren chequeo confirmatorio</div>
            </div>

            {/* True Negatives */}
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-[11px] text-slate-400">Verdaderos Negativos (TN)</div>
              <div className="text-lg font-bold text-slate-200 mt-0.5">{trueNegatives.toLocaleString()}</div>
              <div className="text-[10px] text-slate-500">Sanos descartados con éxito</div>
            </div>
          </div>
        </div>

        {/* Statistical Metrics Panel */}
        <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-300 mb-3 font-mono">
              Métricas Estadísticas Resultantes
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-medium">Sensibilidad (Recall - Métrica Prioritaria):</span>
                  <span className="font-mono text-emerald-400 font-bold">{(sensitivity * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${sensitivity * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">Especificidad (Specificity):</span>
                  <span className="font-mono text-cyan-400 font-medium">{(specificity * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-cyan-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${specificity * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">Precisión (PPV):</span>
                  <span className="font-mono text-slate-300 font-medium">{(precision * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-slate-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${precision * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 leading-normal">
            💡 <strong>Conclusión del diseño:</strong> Al calibrar el threshold en <span className="font-mono text-teal-300">{threshold.toFixed(2)}</span>, el modelo captura el <strong>{(sensitivity * 100).toFixed(1)}%</strong> de las cardiopatías reales, priorizando la vida del paciente antes que descartar un control adicional.
          </div>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// SUB-SIMULATOR 2: Backend Concesionaria CRUD
// ==========================================
function BackendConcesionariaSimulator() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'inventory' | 'schema' | 'rest'>('inventory');

  const sampleCars = [
    { id: 'CAR-001', brand: 'Toyota', model: 'Corolla GR-Sport', year: 2024, stock: 3, price: '$32,500 USD', status: 'DISPONIBLE' },
    { id: 'CAR-002', brand: 'Volkswagen', model: 'Taos Highline', year: 2024, stock: 5, price: '$36,800 USD', status: 'DISPONIBLE' },
    { id: 'CAR-003', brand: 'Ford', model: 'Ranger V6 4x4', year: 2023, stock: 2, price: '$49,900 USD', status: 'RESERVADO' },
    { id: 'CAR-004', brand: 'Peugeot', model: '208 GT T200', year: 2024, stock: 7, price: '$24,100 USD', status: 'DISPONIBLE' },
  ];

  const filteredCars = sampleCars.filter(c => 
    c.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-950 rounded-xl p-4 sm:p-5 border border-slate-800 text-slate-200">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-teal-400" />
          <h4 className="text-sm font-bold text-white">
            Explorador de Arquitectura de Persistencia & CRUD (Java / JDO)
          </h4>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-2.5 py-1 rounded font-medium transition-colors ${
              activeTab === 'inventory' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Inventario & Filtros
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-2.5 py-1 rounded font-medium transition-colors ${
              activeTab === 'schema' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Entidad JDO Java
          </button>
          <button
            onClick={() => setActiveTab('rest')}
            className={`px-2.5 py-1 rounded font-medium transition-colors ${
              activeTab === 'rest' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            REST Controller
          </button>
        </div>
      </div>

      {activeTab === 'inventory' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filtrar por marca o modelo (ej. Toyota, Taos)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900/80 border border-slate-700/80 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
              />
            </div>
            <span className="text-xs text-slate-400 font-mono">
              {filteredCars.length} registros cargados
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-slate-800">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-2.5 px-3">ID</th>
                  <th className="py-2.5 px-3">Vehículo</th>
                  <th className="py-2.5 px-3">Año</th>
                  <th className="py-2.5 px-3">Stock</th>
                  <th className="py-2.5 px-3">Precio</th>
                  <th className="py-2.5 px-3">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70">
                {filteredCars.map((car) => (
                  <tr key={car.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-2 px-3 text-teal-400 font-semibold">{car.id}</td>
                    <td className="py-2 px-3 text-white font-sans font-medium">{car.brand} {car.model}</td>
                    <td className="py-2 px-3 text-slate-300">{car.year}</td>
                    <td className="py-2 px-3 text-cyan-300">{car.stock} u.</td>
                    <td className="py-2 px-3 text-emerald-400 font-semibold">{car.price}</td>
                    <td className="py-2 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        car.status === 'DISPONIBLE' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40' : 'bg-amber-950 text-amber-300 border border-amber-800/40'
                      }`}>
                        {car.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'schema' && (
        <pre className="p-3 bg-slate-900 rounded-lg text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed border border-slate-800">
{`// Persistencia Transparente mediante JDO (Java Data Objects) y DataNucleus
@PersistenceCapable(table = "VEHICULOS", detachable = "true")
public class Vehiculo implements Serializable {
    @PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.INCREMENT)
    private Long id;

    @Persistent
    @Column(name = "MARCA", length = 60, allowsNull = "false")
    private String marca;

    @Persistent
    @Column(name = "MODELO", length = 80, allowsNull = "false")
    private String modelo;

    @Persistent
    private Integer anio;

    @Persistent
    private BigDecimal precio;

    @Persistent
    private Integer stockActual;

    // Métodos transaccionales y getters/setters mapeados
}`}
        </pre>
      )}

      {activeTab === 'rest' && (
        <pre className="p-3 bg-slate-900 rounded-lg text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed border border-slate-800">
{`@RestController
@RequestMapping("/api/v1/concesionaria")
@CrossOrigin(origins = "*")
public class VehiculoRestController {

    @Autowired
    private VehiculoService vehiculoService;

    @GetMapping("/stock")
    public ResponseEntity<List<VehiculoDTO>> consultarInventario(
            @RequestParam(required = false) String marca,
            @RequestParam(required = false) BigDecimal maxPrecio) {
        List<VehiculoDTO> resultado = vehiculoService.buscarConFiltros(marca, maxPrecio);
        return ResponseEntity.ok(resultado);
    }

    @PostMapping("/transaccion")
    public ResponseEntity<TransaccionResult> registrarVenta(@Valid @RequestBody OperacionRequest req) {
        TransaccionResult result = vehiculoService.procesarVentaAtomica(req);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }
}`}
        </pre>
      )}
    </div>
  );
}

// ==========================================
// SUB-SIMULATOR 3: Multiplatform Systems & Boot
// ==========================================
function SystemsBootSimulator() {
  const [selectedOS, setSelectedOS] = useState<'linux' | 'windows'>('linux');
  const [hardwareCheck, setHardwareCheck] = useState(true);

  return (
    <div className="bg-slate-950 rounded-xl p-4 sm:p-5 border border-slate-800 text-slate-200">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <h4 className="text-sm font-bold text-white">
            Simulador de Arranque Dual GRUB/BIOS & Diagnóstico de Hardware
          </h4>
        </div>
        <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
          Hardware: Dell / PCBOX
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* GRUB Selector Simulation */}
        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
          <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
            <span>GNU GRUB Version 2.06</span>
            <span className="text-[10px] text-teal-400">Dual Boot Active</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            <button
              onClick={() => setSelectedOS('linux')}
              className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-center justify-between ${
                selectedOS === 'linux' 
                  ? 'bg-teal-950/60 border-teal-500 text-white font-bold' 
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>* Linux Mint 21.3 (External SSD NVMe)</span>
              {selectedOS === 'linux' && <span className="text-[10px] bg-teal-500 text-slate-950 px-1.5 py-0.5 rounded">DEFAULT</span>}
            </button>

            <button
              onClick={() => setSelectedOS('windows')}
              className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-center justify-between ${
                selectedOS === 'windows' 
                  ? 'bg-cyan-950/60 border-cyan-500 text-white font-bold' 
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Windows 10 LTSC (Internal NVMe / Optimized)</span>
              {selectedOS === 'windows' && <span className="text-[10px] bg-cyan-500 text-slate-950 px-1.5 py-0.5 rounded">ACTIVE</span>}
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
            {selectedOS === 'linux' ? (
              <p className="text-teal-300/90 font-mono">
                ➜ Modo Linux: Partición EFI independiente en SSD USB-C 3.2. Cero impacto en el BCD de Windows.
              </p>
            ) : (
              <p className="text-cyan-300/90 font-mono">
                ➜ Modo Windows LTSC: Servicios de telemetría desactivados, kernel optimizado para latencia mínima.
              </p>
            )}
          </div>
        </div>

        {/* Hardware & Driver Diagnostics Panel */}
        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-2.5">
          <div className="flex items-center justify-between text-slate-300 border-b border-slate-800 pb-2">
            <span>Hardware & Driver Status</span>
            <button 
              onClick={() => setHardwareCheck(!hardwareCheck)}
              className="text-[10px] text-teal-400 hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Re-escanear
            </button>
          </div>

          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between p-1.5 rounded bg-slate-950">
              <span className="text-slate-400">BIOS / UEFI Firmware:</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" /> Dell Inc. 1.22.0 (Optimized)
              </span>
            </div>

            <div className="flex items-center justify-between p-1.5 rounded bg-slate-950">
              <span className="text-slate-400">Wi-Fi Realtek RTL8821CE:</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" /> Kernel Patch Applied (DKMS)
              </span>
            </div>

            <div className="flex items-center justify-between p-1.5 rounded bg-slate-950">
              <span className="text-slate-400">SSD I/O External Bus:</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" /> 1050 MB/s (UASP Protocol)
              </span>
            </div>

            <div className="flex items-center justify-between p-1.5 rounded bg-slate-950">
              <span className="text-slate-400">Windows Telemetry Services:</span>
              <span className="text-teal-300 font-bold">Purged / Inactive</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// SUB-SIMULATOR 4: Audio Digital & Formula Controller
// ==========================================
function AudioFormulaSimulator() {
  const [frequency, setFrequency] = useState<number>(4);
  const [formulaMode, setFormulaMode] = useState<'sine' | 'smoothStep' | 'exponential'>('sine');

  // Compute curve points for visualization
  const points = Array.from({ length: 40 }).map((_, i) => {
    const t = i / 39;
    let y = 0.5;
    if (formulaMode === 'sine') {
      y = 0.5 + 0.4 * Math.sin(t * Math.PI * frequency);
    } else if (formulaMode === 'smoothStep') {
      y = t * t * (3 - 2 * t);
    } else {
      y = Math.pow(t, 2.5);
    }
    return { x: i * 8, y: Math.max(10, Math.min(90, (1 - y) * 100)) };
  });

  const pathD = points.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`, '');

  return (
    <div className="bg-slate-950 rounded-xl p-4 sm:p-5 border border-slate-800 text-slate-200">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-purple-400" />
          <h4 className="text-sm font-bold text-white">
            Visualizador de Curvas en Fruity Formula Controller (FL Studio)
          </h4>
        </div>
        <span className="text-[11px] font-mono text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/40">
          DSP Scripting Engine
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* SVG Wave Canvas */}
        <div className="md:col-span-7 bg-slate-900/90 p-3 rounded-xl border border-slate-800">
          <div className="text-[11px] font-mono text-slate-400 mb-2 flex justify-between">
            <span>Osciloscopio / Curva de Modulación Paramétrica</span>
            <span className="text-purple-300">f(t, a, b)</span>
          </div>

          <div className="h-32 w-full bg-slate-950 rounded border border-slate-800 relative overflow-hidden flex items-center justify-center">
            {/* Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415522_1px,transparent_1px),linear-gradient(to_bottom,#33415522_1px,transparent_1px)] bg-[size:16px_16px]" />
            <svg className="w-full h-full relative z-10" viewBox="0 0 320 100" preserveAspectRatio="none">
              <path
                d={pathD}
                fill="none"
                stroke="#c084fc"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            </svg>
          </div>

          <div className="flex items-center justify-between mt-3 text-xs">
            <span className="text-slate-400 font-mono">Frecuencia de Ciclo:</span>
            <div className="flex items-center gap-2 w-48">
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={frequency}
                onChange={(e) => setFrequency(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded appearance-none accent-purple-400"
              />
              <span className="font-mono text-purple-300 font-bold w-6 text-right">{frequency}x</span>
            </div>
          </div>
        </div>

        {/* Formula Options */}
        <div className="md:col-span-5 space-y-2 text-xs">
          <span className="font-semibold text-slate-300 block mb-1">
            Función Matemática de Control:
          </span>

          <button
            onClick={() => setFormulaMode('sine')}
            className={`w-full text-left p-2.5 rounded-lg border font-mono transition-all ${
              formulaMode === 'sine'
                ? 'bg-purple-950/60 border-purple-500 text-white font-bold'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="text-[11px] text-purple-300">Modulación Senoidal Continua</div>
            <div className="text-xs text-slate-300">0.5 + 0.4 * Sin(a * 2 * Pi * t)</div>
          </button>

          <button
            onClick={() => setFormulaMode('smoothStep')}
            className={`w-full text-left p-2.5 rounded-lg border font-mono transition-all ${
              formulaMode === 'smoothStep'
                ? 'bg-purple-950/60 border-purple-500 text-white font-bold'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="text-[11px] text-purple-300">Interpolación Hermite (SmoothStep)</div>
            <div className="text-xs text-slate-300">t * t * (3 - 2 * t)</div>
          </button>

          <button
            onClick={() => setFormulaMode('exponential')}
            className={`w-full text-left p-2.5 rounded-lg border font-mono transition-all ${
              formulaMode === 'exponential'
                ? 'bg-purple-950/60 border-purple-500 text-white font-bold'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="text-[11px] text-purple-300">Respuesta Exponencial de Filtro</div>
            <div className="text-xs text-slate-300">Power(t, 2.5)</div>
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SUB-SIMULATOR 5: Server Admin & Economy
// ==========================================
function EconomyBalanceSimulator() {
  const [taxRate, setTaxRate] = useState<number>(8); // percentage
  const [lootDropMultiplier, setLootDropMultiplier] = useState<number>(1.2);

  // Economic calculation
  const totalCurrencySpawned = Math.round(150000 * lootDropMultiplier);
  const totalCurrencySunk = Math.round(totalCurrencySpawned * (taxRate / 10 + 0.35));
  const netInflationRate = ((totalCurrencySpawned - totalCurrencySunk) / totalCurrencySpawned) * 100;

  return (
    <div className="bg-slate-950 rounded-xl p-4 sm:p-5 border border-slate-800 text-slate-200">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Coins className="w-4 h-4 text-amber-400" />
          <h4 className="text-sm font-bold text-white">
            Simulador de Balance de Economía Virtual (Server Dedicated)
          </h4>
        </div>
        <span className="text-[11px] font-mono text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/40">
          Currency Sinks & Taps
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Controls */}
        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-4">
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-300">Impuesto en Mercado Virtual (Currency Sink):</span>
              <span className="font-mono text-amber-300 font-bold">{taxRate}%</span>
            </div>
            <input
              type="range"
              min="2"
              max="15"
              step="1"
              value={taxRate}
              onChange={(e) => setTaxRate(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded appearance-none accent-amber-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-300">Multiplicador de Drop de Botín (Currency Tap):</span>
              <span className="font-mono text-teal-300 font-bold">{lootDropMultiplier.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.8"
              max="2.5"
              step="0.1"
              value={lootDropMultiplier}
              onChange={(e) => setLootDropMultiplier(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded appearance-none accent-teal-400"
            />
          </div>
        </div>

        {/* Economic Balance Card */}
        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-slate-500 text-[10px]">Moneda Generada / Día</div>
              <div className="text-emerald-400 font-bold text-sm mt-0.5">+{totalCurrencySpawned.toLocaleString()}</div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-slate-500 text-[10px]">Moneda Destruida (Sink)</div>
              <div className="text-rose-400 font-bold text-sm mt-0.5">-{totalCurrencySunk.toLocaleString()}</div>
            </div>
          </div>

          <div className="mt-3 p-3 rounded-lg bg-slate-950 border border-slate-800">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Tasa de Inflación Estimada:</span>
              <span className={`font-mono font-bold text-sm ${
                netInflationRate < 15 ? 'text-emerald-400' : netInflationRate < 35 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {netInflationRate > 0 ? `+${netInflationRate.toFixed(1)}%` : `${netInflationRate.toFixed(1)}%`}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              {netInflationRate < 20 
                ? '✅ Mercado equilibrado: progreso saludable de novatos y veteranos.' 
                : '⚠️ Riesgo inflacionario: se recomienda subir la tasa de quema en comercios.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
