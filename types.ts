
export interface Influencer {
  id: string;
  name: string;
  avatar: string;
  type: 'Nano' | 'Micro' | 'Macro';
  reputationScore: number;
  authenticityScore: number;
  reach: string;
  tags: string[];
}

export interface ROIStats {
  reachBasedER: number;
  cpeOptimization: number;
  totalRoi: string;
}

export interface Shipment {
  id: string;
  influencer: string;
  product: string;
  status: 'In Transit' | 'Delivered' | 'Pending';
  progress: number;
}
