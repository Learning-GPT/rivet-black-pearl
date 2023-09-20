import { DatasetId, DatasetMetadata, ProjectId, getError } from '@ironclad/rivet-core';
import { useEffect, useState } from 'react';
import { datasetProvider } from '../utils/globals';
import { toast } from 'react-toastify';
import { datasetsState } from '../state/dataStudio';
import { useRecoilState } from 'recoil';

export function useDatasets(projectId: ProjectId) {
  const [datasets, updateDatasets] = useRecoilState(datasetsState);

  const initDatasets = async () => {
    try {
      await datasetProvider.loadDatasets(projectId);
      await reloadDatasets();
    } catch (err) {
      toast.error(getError(err).message);
    }
  };

  const reloadDatasets = async () => {
    try {
      const datasets = await datasetProvider.getDatasetsForProject(projectId);
      updateDatasets(datasets);
    } catch (err) {
      toast.error(getError(err).message);
    }
  };

  useEffect(() => {
    initDatasets();
  }, [projectId]);

  const putDataset = async (dataset: DatasetMetadata) => {
    await datasetProvider.putDatasetMetadata(dataset);
    await reloadDatasets();
  };

  const deleteDataset = async (datasetId: DatasetId) => {
    await datasetProvider.deleteDataset(datasetId);
    await reloadDatasets();
  };

  return {
    datasets,
    putDataset,
    deleteDataset,
  };
}
